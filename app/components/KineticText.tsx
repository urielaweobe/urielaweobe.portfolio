import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

const BOLD_WEIGHT = 700;
const REACH_PX = 120;
const WAVE_REACH_LETTERS = 6;
const IDLE_AFTER_MS = 2500;
const WAVE_MS = 3200;
const WAVE_PAUSE_MS = 1800;

type KineticTextProps = {
  children: ReactNode;
  className?: string;
};

type Letter = {
  element: HTMLElement;
  restWeight: number;
  restWidth: number;
  boldWidth: number;
};

export function KineticText({ children, className }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const elements = [
      ...container.querySelectorAll<HTMLElement>("[data-letter]"),
    ];
    let letters: Letter[] = [];
    let pointer = { x: 0, y: 0 };
    let lastPointerAt = Number.NEGATIVE_INFINITY;
    let frame = 0;
    let isMounted = true;

    const measure = () => {
      for (const element of elements) {
        element.style.fontWeight = "";
        element.style.letterSpacing = "";
      }
      const rest = elements.map((element) => ({
        weight: Number(getComputedStyle(element).fontWeight),
        width: element.getBoundingClientRect().width,
      }));
      for (const element of elements) {
        element.style.fontWeight = String(BOLD_WEIGHT);
      }
      letters = elements.map((element, index) => ({
        element,
        restWeight: rest[index].weight,
        restWidth: rest[index].width,
        boldWidth: element.getBoundingClientRect().width,
      }));
      for (const element of elements) {
        element.style.fontWeight = "";
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      lastPointerAt = performance.now();
    };

    const getPointerCloseness = () => {
      const centres = letters.map(({ element }) => {
        const rect = element.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
      return centres.map((centre) =>
        Math.max(
          0,
          1 - Math.hypot(centre.x - pointer.x, centre.y - pointer.y) / REACH_PX,
        ),
      );
    };

    const getWaveCloseness = (now: number) => {
      const progress = (now % (WAVE_MS + WAVE_PAUSE_MS)) / WAVE_MS;
      const position =
        -WAVE_REACH_LETTERS +
        (letters.length + WAVE_REACH_LETTERS * 2) * Math.min(progress, 1);
      return letters.map((_, index) =>
        Math.max(0, 1 - Math.abs(index - position) / WAVE_REACH_LETTERS),
      );
    };

    const render = (now: number) => {
      const closeness =
        now - lastPointerAt < IDLE_AFTER_MS
          ? getPointerCloseness()
          : getWaveCloseness(now);
      letters.forEach((letter, index) => {
        const eased = (1 - Math.cos(Math.PI * closeness[index])) / 2;
        const weight =
          letter.restWeight + (BOLD_WEIGHT - letter.restWeight) * eased;
        const width =
          letter.restWidth + (letter.boldWidth - letter.restWidth) * eased;
        letter.element.style.fontWeight = String(Math.round(weight));
        letter.element.style.letterSpacing = `${letter.restWidth - width}px`;
      });
      frame = requestAnimationFrame(render);
    };

    const start = () => {
      if (!isMounted) return;
      cancelAnimationFrame(frame);
      measure();
      frame = requestAnimationFrame(render);
    };

    document.fonts.ready.then(start);
    window.addEventListener("resize", start);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      isMounted = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", start);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("touch-pan-y", className)}>
      {children}
    </div>
  );
}

export function Letters({ text }: { text: string }) {
  return Array.from(text.matchAll(/./gsu), (character) =>
    /\s/.test(character[0]) ? (
      character[0]
    ) : (
      <span key={character.index} data-letter>
        {character[0]}
      </span>
    ),
  );
}

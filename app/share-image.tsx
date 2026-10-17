import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { shareCards } from "~/lib/share-cards";
import type { Route } from "./+types/share-image";

const WIDTH = 1200;
const HEIGHT = 630;
const fontsDirectory = join(process.cwd(), "app/assets/fonts");

export async function loader({ params }: Route.LoaderArgs) {
  const card = shareCards[params["*"]?.replace(/\.png$/, "") ?? ""];
  if (!card) return new Response("Not found", { status: 404 });

  const [{ Resvg }, { default: satori }, regular, bold] = await Promise.all([
    import("@resvg/resvg-js"),
    import("satori"),
    readFile(join(fontsDirectory, "InstrumentSans-Regular.ttf")),
    readFile(join(fontsDirectory, "InstrumentSans-Bold.ttf")),
  ]);

  const svg = await satori(
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 88,
        background: "#0f1113",
        color: "#eceef0",
        fontFamily: "Instrument Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 28,
          color: "#8d929a",
        }}
      >
        <span>urielaweobe.com</span>
        {card.label && <span>{card.label}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {card.title}
        </div>
        <div style={{ fontSize: 34, color: "#c9ccd1", lineHeight: 1.35 }}>
          {card.subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #24272b",
          paddingTop: 28,
          fontSize: 26,
          color: "#8d929a",
        }}
      >
        <span>Uriel Awe-Obe</span>
        <span>{card.footer}</span>
      </div>
    </div>,
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Instrument Sans",
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Instrument Sans",
          data: bold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  return new Response(new Uint8Array(new Resvg(svg).render().asPng()), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

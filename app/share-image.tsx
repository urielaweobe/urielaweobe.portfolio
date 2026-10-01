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
    readFile(join(fontsDirectory, "Quicksand-Regular.ttf")),
    readFile(join(fontsDirectory, "Quicksand-Bold.ttf")),
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
        background: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "Quicksand",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 28,
          color: "#a3a3a3",
        }}
      >
        <span>urielaweobe.com</span>
        {card.label && <span>{card.label}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
          {card.title}
        </div>
        <div style={{ fontSize: 34, color: "#d4d4d4", lineHeight: 1.35 }}>
          {card.subtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #262626",
          paddingTop: 28,
          fontSize: 26,
          color: "#a3a3a3",
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
        { name: "Quicksand", data: regular, weight: 400, style: "normal" },
        { name: "Quicksand", data: bold, weight: 700, style: "normal" },
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

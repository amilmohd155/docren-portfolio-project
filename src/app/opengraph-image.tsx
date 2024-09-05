/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt =
  "Amil Muhammed Hamza is a full-stack developer crafting dynamic, end-to-end solutions infused with a flair for 3D creativity.";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const urbanist = await fetch(
    new URL("../../assets/fonts/Urbanist-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="bg-slate-900 flex flex-col w-full h-full justify-center text-slate-300 text-3xl p-10"
        style={{
          fontFamily: "Urbanist",
        }}
      >
        <p tw="text-9xl">Amil Muhammed Hamza</p>
        <p tw="items-baseline m-0">
          junior
          <span tw="text-5xl font-bold ml-2">Full stack developer</span>
        </p>
        <p tw="items-baseline m-0">
          based in
          <span tw="text-5xl font-bold ml-2">London</span>
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Urbanist",
          data: urbanist,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}

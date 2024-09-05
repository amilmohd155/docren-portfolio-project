import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import clsx from "clsx";
import StarsCanvas from "@/components/StarBackground";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Amil Muhammed Hamza",
    template: "%s | Amil Muhammed",
  },
  description:
    "Amil Muhammed Hamza is a full-stack developer crafting dynamic, end-to-end solutions infused with a flair for 3D creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          "bg-slate-900 leading-relaxed text-slate-300 antialiased selection:bg-violet-300 selection:text-violet-900",
          urbanist.className
        )}
      >
        <StarsCanvas />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}

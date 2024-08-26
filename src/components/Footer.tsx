import { footer } from "@/utils/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-md text-sm text-slate-500 sm:pb-0">
      <p>
        Developed by Amil using{" "}
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-violet-300 focus-visible:text-violet-300"
        >
          Visual Studio Code
        </Link>{" "}
        . Built with{" "}
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-violet-300 focus-visible:text-violet-300"
        >
          Next.js
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-violet-300 focus-visible:text-violet-300"
        >
          Tailwind CSS
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href="https://r3f.docs.pmnd.rs/getting-started/introduction"
          className="font-medium text-slate-400 hover:text-violet-300 focus-visible:text-violet-300"
        >
          React-three-fiber
        </Link>
        . Inspired by{" "}
        <Link
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-violet-300 focus-visible:text-violet-300"
          href="https://brittanychiang.com/"
        >
          {`Brittany Chiang's `}
        </Link>
        portfolio page.
      </p>
    </footer>
  );
}

import { footer } from "@/utils/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-md text-sm text-slate-500 sm:pb-0">
      <p>
        Developed by Amil using{" "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Visual Studio Code
        </Link>{" "}
        . Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Tailwind CSS
        </Link>
        . Inspire by portfolio page by{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://brittanychiang.com/"
        >
          Brittany Chiang
        </Link>
      </p>
    </footer>
  );
}

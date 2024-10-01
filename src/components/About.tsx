import { Bio } from "@/utils/data";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
  return (
    <div>
      {Bio.about.map((para) => (
        <p className="leading-relaxed prose-rose mb-2" key={para}>
          {para}
        </p>
      ))}
      <div className="mt-3">
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={process.env.RESUME_URL || "#"}
          className="group inline-flex items-center font-semibold leading-tight text-slate-200"
          aria-label="View all projects (opens in a new tab)"
        >
          <span className="capitalize group-hover:text-violet-300 group-focus-visible:text-violet-300 group-hover:underline group-focus-visible:underline underline-offset-4">
            View resume
            <span className="inline-block">
              <GoArrowUpRight
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

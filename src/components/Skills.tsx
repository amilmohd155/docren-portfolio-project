import { Skills } from "@/utils/constants";
import Link from "next/link";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

export default function SkillSection() {
  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {Skills.map((skill) => (
          <li key={skill} className=" mt-2">
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-lg font-medium leading-5 text-teal-300 uppercase">
              {skill}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/"
          className="group inline-flex items-center font-semibold leading-tight text-slate-200"
          aria-label="View all skills"
        >
          <span className="capitalize">
            View all skills
            <span className="inline-block">
              <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}

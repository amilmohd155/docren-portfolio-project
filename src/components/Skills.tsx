import { TopSkills } from "@/utils/data";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function SkillSection() {
  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {TopSkills.map(({ label }) => (
          <li key={label} className=" mt-2" aria-label={label}>
            <p className="flex items-center rounded-full bg-violet-400/10 px-3 py-2 text-lg font-medium leading-5 text-violet-300">
              {label}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/skills"
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

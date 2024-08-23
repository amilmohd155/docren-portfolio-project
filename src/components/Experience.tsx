import { Experience } from "@/utils/data";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <>
      <div>
        <ol className="group/list">
          {Experience.map(
            ({
              workplace,
              startDate,
              endDate,
              title,
              location,
              description,
            }) => (
              <li className="mb-12" key={workplace}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transform-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,148,0)] lg:group-hover:drop-shadow-lg" />
                  <header className="uppercase z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 sm:col-span-2">
                    {startDate}
                    <span className="mx-1">-</span>
                    {endDate}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug">
                      <div>
                        <Link href="" className="text-slate-200">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>
                            {title}
                            <span> - </span>
                            {workplace}
                          </span>
                        </Link>
                      </div>
                      <p className="text-slate-500" aria-hidden="true">
                        {location}
                      </p>
                    </h3>
                    <div
                      className="mt-2 prose-invert"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </>
  );
}

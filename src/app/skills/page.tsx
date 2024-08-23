import {
  CreativeSkills,
  OtherSkills,
  SoftwareKnowledge,
  TechnicalSkills,
  TopSkills,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function Page() {
  return (
    <div className="lg:py-24">
      <Link
        href="/#skills"
        className="group inline-flex items-center font-semibold leading-tight text-slate-200 mb-2"
        aria-label="View all skills"
      >
        <span className="capitalize">
          <span className="inline-block">
            <MdArrowBack className="mr-2 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2 motion-reduce:transition-none" />
          </span>
          Back
        </span>
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Skills
      </h1>

      {/* Top Skills */}
      <div className="flex justify-around flex-wrap py-10 lg:gap-5 gap-2">
        {TopSkills.map(({ label, icon }) => (
          <div key={label} className="flex flex-col items-center">
            <Image
              priority
              src={icon}
              alt="label"
              width={75}
              height={75}
              className="transition lg:hover:scale-90 rounded w-10 lg:w-20 md:w-14"
            />
            <p className="text-xs font-semibold tracking-wide text-slate-500 mt-2 lg:hidden">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:gap-5  lg:py-12">
        <div className="lg:col-span-2 relative overflow-auto shadow-md rounded-lg border p-3">
          <table>
            <thead>
              <tr>
                <th
                  scope="row"
                  className="text-lg font-bold leading-tight text-slate-200 text-start pb-3"
                >
                  Technical Skills
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2 lg:grid-cols-8 gap-x-3 tracking-wide">
              {TechnicalSkills.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="relative overflow-auto shadow-md rounded-lg border p-3">
          <table>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-lg font-bold leading-tight text-slate-200 text-start pb-3"
                >
                  Creative Skills
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 tracking-wide">
              {CreativeSkills.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="relative overflow-auto shadow-md rounded-lg border p-3">
          <table>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-lg font-bold leading-tight text-slate-200 text-start pb-3"
                >
                  Other Skills
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2 gap-2 tracking-wide">
              {OtherSkills.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="lg:col-span-2 relative overflow-auto shadow-md rounded-lg border p-3">
          <table>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-lg font-bold leading-tight text-slate-200 text-start pb-3"
                >
                  Software Knowledge
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {SoftwareKnowledge.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
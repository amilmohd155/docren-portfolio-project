import { Bio } from "@/utils/data";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function About() {
  return (
    <>
      <div>
        <p className="leading-relaxed">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio.<br></br>
          My main focus these days is building accessible user interfaces for
          our customers at Klaviyo. I most enjoy building software in the sweet
          spot where design and engineering meet — things that look good but are
          also built well under the hood. In my free time, I&apos;ve also
          released an online video course that covers everything you need to
          know to build a web app with the Spotify API.<br></br>
          When I’m not at the computer, I’m usually rock climbing, reading,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds.
        </p>
        <div className="mt-5">
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href="#"
            className="group inline-flex items-center font-semibold leading-tight text-slate-200"
            aria-label="View all projects (opens in a new tab)"
          >
            <span className="capitalize group-hover:text-violet-300 group-focus-visible:text-violet-300 group-hover:underline group-focus-visible:underline underline-offset-4">
              View resume
              <span className="inline-block ml-1">
                <GoArrowUpRight
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

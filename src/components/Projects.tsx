import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    title: "Build a Spotify Connected App",
    description: `Video course that teaches how to build a web app with the
                Spotify Web API. Topics covered include the principles of REST
                APIs, user auth flows, Node, Express, React, Styled Components,
                and more.`,
    image: "/testIMG.jpeg",
    imageAlt: "",
    url: "/",
  },
  {
    title: "Build a Spotify Connected App",
    description: `Video course that teaches how to build a web app with the
                Spotify Web API. Topics covered include the principles of REST
                APIs, user auth flows, Node, Express, React, Styled Components,
                and more.`,
    image: "/testIMG.jpeg",
    imageAlt: "",
    url: "/",
  },
];

export default function Projects() {
  return (
    <div>
      <ul className="group/list">
        {projects.map(({ title, description, image, url, imageAlt }) => (
          <li className="mb-12" key={title}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <Link
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${title} (opens in a new tab)`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {title}
                      <span className="inline-block ml-1">
                        <GoArrowUpRight
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-normal">{description}</p>
              </div>
              <Image
                src={image}
                alt={imageAlt}
                width={200}
                height={48}
                decoding="async"
                loading="lazy"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

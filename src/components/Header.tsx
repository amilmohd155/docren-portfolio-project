import { Pages } from "@/utils/pages";
import { Bio, SocialLinks } from "@/utils/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{Bio.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {Bio.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{Bio.shortDecription}</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {Pages.map((item, index) => (
              <li key={item.link}>
                <Link
                  className="group flex items-center py-3 active"
                  href={`#${item.link}`}
                >
                  <span className="uppercase text-xs font-bold tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item.link}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul aria-label="Social media" className="ml-1 mt-8 flex items-center">
        {SocialLinks.map((item, index) => (
          <li key={item.label} className="mr-5 text-xs shrink-0">
            <a
              href={item.link}
              className="block hover:text-slate-200"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${item.label} (opens in a new tab)`}
              title={item.label}
            >
              <span className="sr-only">{item.label}</span>
              <item.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

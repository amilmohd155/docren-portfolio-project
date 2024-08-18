import Footer from "@/components/Footer";
import { Pages } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
      <main id="content" className="">
        {Pages.map(({ link, label, children }, index) => (
          <section
            key={link}
            id={link}
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label={label}
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 py-5 px-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                {link}
              </h2>
            </div>
            {children && children()}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

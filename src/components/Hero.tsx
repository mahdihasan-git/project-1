import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-ink-soft sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            
              href="#technologies"
              className="brand-gradient-bg rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-pink-200 transition-opacity hover:opacity-90"
            >
              Explore Technologies
            </a>
            
              href="#about"
              className="rounded-lg border border-hairline px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink-soft"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Isometric illustration of a layered development stack with UI, logic, and data tiers"
            className="w-full max-w-sm select-none sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* <div className="inline-flex items-center justify-center px-4 py-1.5 mb-10 rounded-full border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
            <span className="text-s font-light">Educational Platform for Financial Mastery</span>
          </div> */}

        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-wide italic mt-18 mb-8 max-w-6xl mx-auto leading-[1.1] text-customblue">
          <span className="block">Effortless Learning</span>
          <span className="block">Endless Fun</span>
        </h1>

        {/* <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-2xl font-light">
            Join our community of investors and analysts mastering crypto, stocks, and macro economics through expert-led
            education.
          </p> */}
      </div>
    </section>
  );
}

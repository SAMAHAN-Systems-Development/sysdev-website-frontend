


export default function AboutUsHeroBanner() {
  return (
    <section className="relative w-full h-[400px] min-h-max flex flex-col items-center">
      <div className="absolute -z-10 w-full h-full" />
      <div className="flex flex-col gap-5 py-10 px-10 w-full max-w-[320px] justify-center min-h-full md:px-28 xl:px-56 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <h1 className="font-instrument-sans font-bold text-blue3 text-4xl md:text-7xl">
          About Us
        </h1>
        <p className="font-instrument-sans text-blue3 text-justify text-sm md:text-xl lg:max-w-[500px]">
          SYSDEV develops tech solutions for SAMAHAN and the AdDU community&#44; driven by student
          collaboration and innovation&#46;
        </p>
      </div>
    </section>
  );
}

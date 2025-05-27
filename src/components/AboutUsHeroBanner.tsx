export default function AboutUsHeroBanner() {
  return (
    <section className="w-full h-dvh min-h-max bg-[url(../../public/images/AboutUsHeroBannerBackground.png)] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col gap-5 py-10 px-10 md:px-28 xl:px-56 justify-center min-h-full bg-blue3/70">
        <h1 className="font-instrument-sans font-bold text-6xl 2xl:text-8xl text-yellow3 max-w-fit">
          About Us
        </h1>
        <p className="font-instrument-sans text-white text-justify text-xl 2xl:text-2xl max-w-md 2xl:max-w-[524px]">
          SYSDEV develops tech solutions for SAMAHAN and the AdDU community, driven by student
          collaboration and innovation.
        </p>
      </div>
    </section>
  );
}

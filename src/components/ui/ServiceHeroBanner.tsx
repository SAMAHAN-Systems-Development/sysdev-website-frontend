import Image from "next/image"

const ServiceHeroBanner = () => {
    return (

        <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen overflow-hidden">
            <Image
                src="/images/AboutUsHeroBannerBackground.png"
                alt="Service Hero Banner Background"
                fill
                className="object-cover"
                priority
            />

            <div className="relative z-10 flex flex-col min-h-full bg-blue3/70 text-center">
                <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
                    <h1 className="font-instrument-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white leading-tight">
                        Services
                    </h1>
                    <p className="text-white mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg leading-relaxed">
                        See how <span className="font-instrument-sans text-yellow4 underline">SYSDEV</span> empowers the community through technology.
                    </p>
                </div>

                <div className="flex justify-center items-end">
                    <div className="relative w-[500px] h-[250px] sm:w-[500px] sm:h-[250px] md:w-[800px] md:h-[400px] lg:w-[900px] lg:h-[450px] xl:w-[1200px] xl:h-[600px]">
                        <Image
                            src="/images/SysDevMascot_cropped.png"
                            alt="SysDev Mascot"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeroBanner
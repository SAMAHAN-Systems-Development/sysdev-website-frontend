import Image from "next/image"

const ServiceHeroBanner = () => {
    return (

        <div className="relative w-full h-min overflow-hidden">
            {/* Placeholder for blue gradient bg */}         
            <Image
                src="/images/SERVICES-hero.jpg"
                alt="Service Hero Banner Background"
                fill
                className="object-cover"
                priority
                quality={95}
            />

            <div className="relative flex flex-col justify-between text-center">
                <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8  md:pt-12 lg:pt-16 xl:pt-20">
                    <h1 className="font-instrument-sans font-bold text-2xl  md:text-4xl lg:text-6xl xl:text-7xl text-white leading-tight">
                        Services
                    </h1>
                    <p className="text-white mt-1 md:mt-3 lg:mt-4 text-sm md:text-xl lg:text-2xl max-w-[220px] md:max-w-md lg:max-w-lg xl:max-w-3xl leading-relaxed">
                        See how <span className="font-instrument-sans text-yellow4 underline">SYSDEV</span> empowers the community through technology.
                    </p>
                </div>

                <div className="flex justify-center text-center pt-2">
                    <div className="relative w-[500px] h-[150px] md:w-[800px] md:h-[350px] lg:w-[1050px] lg:h-[450px] xl:w-[1200px] xl:h-[600px]">
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
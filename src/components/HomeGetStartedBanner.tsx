import React from 'react'
import Button from './ui/Button'

const HomeGetStartedBanner = () => {
    const backgroundImageUrl = 'images/AboutUsHeroBannerBackground.png';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/images/2nd Sem AY 24-25 Org Primer.pdf'; // relative to public/
        link.download = 'SysDevPrimer.pdf'; // optional: set filename
        link.click();
    };

    return (
        <div
            className='w-full flex flex-col items-center justify-center text-center py-3 md:py-14 lg:py-22 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center'
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className="absolute inset-0 bg-blue3 opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className='font-instrument-sans font-bold text-white text-xl sm:text-2xl lg:text-3xl mt-10 mb-1 md:mb-3'>
                    <i>Get Started with SysDev</i>
                </h1>
                <p className='font-instrument-sans text-white text-sm sm:text-base max-w-sm sm:max-w-md  md:max-w-2xl mb-8 md:mb-14 lg:mb-15'>
                    <i>Download our Starter Guide to know learn about our mission, roles, and how we collaborate.</i>
                </p>
                <div className='flex items-center h-20'>
                    <Button
                        variant={"yellow"}
                        className="font-bold w-[12rem] sm:w-72 md:w-96 mb-10"
                        size={"big"}
                        onClick={handleDownload}
                    >
                        Download Primer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeGetStartedBanner;

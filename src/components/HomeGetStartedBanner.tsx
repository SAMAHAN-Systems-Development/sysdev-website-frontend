import React from 'react'
import Button from './ui/Button'

const HomeGetStartedBanner = () => {
    const backgroundImageUrl = 'images/AboutUsHeroBannerBackground.png';

    return (
        <div
            className='w-full flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center'
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className="absolute inset-0 bg-blue3 opacity-70"></div>

            <div className="relative z-10">
                <h1 className='font-instrument-sans font-bold text-white text-3xl sm:text-4xl lg:text-5xl mt-10 mb-4'>
                    <i>Get Started with SysDev</i>
                </h1>
                <p className='font-instrument-sans text-white text-base sm:text-lg max-w-2xl mb-8'>
                    <i>Download our Starter Guide to know learn about our mission, roles, and how we collaborate.</i>
                </p>
                <div className='flex justify-center w-full'>
                    <Button
                        variant={"yellow"}
                        className="font-bold w-full max-w-[12rem] sm:max-w-xs md:w-96 mb-10"
                    >
                        Download Primer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomeGetStartedBanner
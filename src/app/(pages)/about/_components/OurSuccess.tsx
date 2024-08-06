"use client"
import NumberTicker from '@/components/magicui/number-ticker';
import React from 'react'

const OurSuccess = () => {
    return (
        <div className='w-full px-20 pt-20 min-h-[100vh] bg-gradient-to-r from-slate-50 to-gray-200 relative'>
            <h2 className='text-7xl font-semibold tracking-tight'>Empowering <br /> Success Stories</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mt-20'>
                <div className='hidden lg:block col-span-1 place-items-end h-full relative'>
                    <img src={"/assets/images/sculpt.png"} alt='Sculpture' className='h-auto w-full absolute bottom-0' />
                </div>
                <div className='col-span-1 pb-10'>
                    <p className='text-md tracking-tight'>Over the years, we've propelled numerous businesses to thrive, maintaining robust partnerships through our collaborative approach.<br /><br />We are proud to help businesses grow and succeed in different industries. From startups to established enterprises, our tailored solutions have helped them conquer challenges, reach milestones, and actualize their visions.</p>
                    <div className='py-10 border-y border-y-black mt-10 flex gap-10 items-start justify-between w-full xl:max-w-2xl'>
                        <div>
                            <p className="whitespace-pre-wrap text-3xl md:text-4xl xl:text-6xl font-semibold tracking-tighter text-black dark:text-white text-center">
                                <NumberTicker value={100} className='' />%
                            </p>
                            <h3 className='text-lg lg:text-xl xl:text-2xl text-center font-semibold tracking-tighter mt-4'>Success Rate</h3>
                        </div>
                        <p className='max-w-[200px] md:max-w-[300px] xl:max-w-[350px] text-lg font-semibold tracking-tighter'>Our Success rate are always 100% with our innovative solutions.</p>
                    </div>
                    <div className='py-10 border-b border-y-black flex gap-10 items-start justify-between w-full xl:max-w-2xl'>
                        <div>
                            <p className="whitespace-pre-wrap text-3xl md:text-4xl xl:text-6xl font-semibold tracking-tighter text-black dark:text-white text-center">
                                <NumberTicker value={150} />+
                            </p>
                            <h3 className='text-lg lg:text-xl xl:text-2xl text-center font-semibold tracking-tighter mt-4'>Projects Served</h3>
                        </div>
                        <p className='max-w-[200px] md:max-w-[300px] xl:max-w-[350px] text-lg font-semibold tracking-tighter'>We helped more than 150 business to reach to their business goals with our innovative solutions.</p>
                    </div>
                    <div className='py-10 border-b border-y-black flex gap-10 items-start justify-between w-full xl:max-w-2xl'>
                        <div>
                            <p className="whitespace-pre-wrap text-3xl md:text-4xl xl:text-6xl font-semibold tracking-tighter text-black dark:text-white text-center">
                                <NumberTicker value={50} />+
                            </p>
                            <h3 className='text-lg lg:text-xl xl:text-2xl text-center font-semibold tracking-tighter mt-4'>Clients Worldwide</h3>
                        </div>
                        <p className='max-w-[200px] md:max-w-[300px] xl:max-w-[350px] text-lg font-semibold tracking-tighter'>Over the time, working from Large to small business we have accumulated over 50+ Potential Clients.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSuccess;

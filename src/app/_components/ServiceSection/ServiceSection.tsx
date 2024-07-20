import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ServiceSection = () => {
    return (
        <div className='py-20 px-8 md:py-40 md:px-20 w-full mb-10'>
            <div className='flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                <span className='h-3 w-3 bg-[#2250cd] block rounded-full' />
                <span className='font-light tracking-tight'>What we offer?</span>
            </div>
            <div>
                <ul>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">01</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium group-hover:text-blue-700 transition-colors tracking-tight mb-12">UX Design</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    Exceptional UX isn&apos;t just design. It&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our UX design agency.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/ui_ux.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white group h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">02</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 group-hover:text-blue-700 transition-colors">Branding</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    Effective branding isn&apos;t just about logos and colors; it&apos;s about creating a lasting impression that distinguishes your business. At Musemind, we craft unique brand identities that resonate with your audience, enhancing recognition and trust.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/branding.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white group h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">03</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 group-hover:text-blue-700 transition-colors">Full Stack Next.js</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    Exceptional UX isn't just design. It's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our UX design agency.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/next_js.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white group h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">04</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 group-hover:text-blue-700 transition-colors">SaaS Design</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    SaaS UX design matters most because it directly impacts user satisfaction, adoption, and retention. HashBitStudio understands this, which is why we have dedicated SaaS experts in our design agency.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/saas.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white group h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">05</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 group-hover:text-blue-700 transition-colors">Web Design</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    Our professional web design solutions are creative and functional to create stunning websites.  We ensure that your website conveys your brand message and increases user retention.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/web_design.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                    <li className='border-b py-10 group'>
                        <div className="flex items-start gap-10 p-4 text-white group h-full max-h-20 md:max-h-28 hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                            <span className="text-2xl font-light tracking-tight">06</span>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 group-hover:text-blue-700 transition-colors">Web Flow</h3>
                                <p className="font-light tracking-tight max-w-md">
                                    In today's digital landscape, a well-structured website is essential. Webflow enables us to build scalable, high-performance websites with precision. With Webflow, your online presence is future-proof.
                                </p>
                                <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                            </div>
                            <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 transition-scale transition-transform">
                                <img
                                    src="/assets/services/webflow.webp"
                                    alt="UI UX"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSection

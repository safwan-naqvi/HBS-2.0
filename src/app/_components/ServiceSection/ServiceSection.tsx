import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceSectionData = [
    {
        id: "01",
        title: "User Experience (UX) Design",
        description: "Exceptional UX isn&apos;t just design. It&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our UX design agency.",
        image: "/assets/services/ui_ux.webp",
        link: "/"
    },
    {
        id: "02",
        title: "Branding",
        description: "Effective branding isn&apos;t just about logos and colors; it&apos;s about creating a lasting impression that distinguishes your business. At Musemind, we craft unique brand identities that resonate with your audience, enhancing recognition and trust.",
        image: "/assets/services/branding.webp",
        link: "/"
    },
    {
        id: "03",
        title: "Full Stack Next.js",
        description: "Exceptional UX isn't just design. It's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our UX design agency.",
        image: "/assets/services/next_js.webp",
        link: "/"
    },
    {
        id: "04",
        title: "SaaS Designs",
        description: "SaaS UX design matters most because it directly impacts user satisfaction, adoption, and retention. HashBitStudio understands this, which is why we have dedicated SaaS experts in our design agency.",
        image: "/assets/services/saas.webp",
        link: "/"
    },
    {
        id: "05",
        title: "Web Design",
        description: "Our professional web design solutions are creative and functional to create stunning websites.  We ensure that your website conveys your brand message and increases user retention.",
        image: "/assets/services/web_design.webp",
        link: "/"
    },
    {
        id: "06",
        title: "Web Flow",
        description: "In today's digital landscape, a well-structured website is essential. Webflow enables us to build scalable, high-performance websites with precision. With Webflow, your online presence is future-proof.",
        image: "/assets/services/webflow.webp",
        link: "/"
    }
]

const ServiceSection = () => {
    return (
        <div className='py-20 px-8 md:py-40 md:px-20 w-full mb-10'>
            <div className='flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                <span className='h-3 w-3 bg-[#2250cd] block rounded-full' />
                <span className='font-light tracking-tight'>What we offer?</span>
            </div>
            <div>
                <ul>
                    {ServiceSectionData.map((service) =>
                        <li className='border-b py-10 group' key={service.id}>
                            <div className="flex items-start gap-10 p-4 text-white h-full max-h-20 md:max-h-28 group-hover:max-h-96 transition-[max-height] ease-[cubic-bezier(0.76,-0.01,0.86,0.53)] duration-700 overflow-hidden">
                                <span className="text-2xl font-light tracking-tight">{service.id}</span>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-3xl md:text-5xl font-medium group-hover:text-blue-700 transition-colors tracking-tight mb-12">{service.title}</h3>
                                    <p className="font-light tracking-tight max-w-md">
                                        {service.description}
                                    </p>
                                    <Link href={service.link}>
                                        <Button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-full">Learn More</Button>
                                    </Link>
                                </div>
                                <div className="hidden md:block rounded-xl overflow-hidden bg-white relative w-full h-24 max-w-fit scale-100 rotate-0 origin-top-right group-hover:-translate-x-4 group-hover:-rotate-[15deg] group-hover:h-24 group-hover:scale-150 delay-200 transition-scale transition-transform">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </li>
                    )}


                </ul>
            </div>
        </div>
    )
}

export default ServiceSection

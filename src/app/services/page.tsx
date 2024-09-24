import HorizontalScroll from '@/components/common/HorizontalScroll';
import Footer from '@/components/layout/Footer';
import HeroContainer from '@/components/layout/HeroContainer/HeroContainer'
import { LeadForm } from '@/components/layout/LeadForm/LeadForm';
import { AuroraBackground } from '@/components/ui/aurora-bg';
import { cardsIndustries, whyChooseOurServicesData } from '@/lib/data';
import { Metadata } from 'next';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore HashBitStudio's comprehensive digital services, from design to development and deployment, tailored to help your business thrive online.",
};

const OurServices = () => {
    return (
        <div className='w-full fade-in' data-lenis-prevent>
            <HeroContainer textOne='Services' textTwo='We Offer' description='Unleashing software engineering expertise for scalable business solutions, from startups to enterprises. Simultaneously, we elevate businesses through high-end experience design, fostering exponential growth.' />
            <div className='bg-white text-[#111] px-10 md:px-20 lg:px-40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-40 pb-10'>
                    <div className='col-span-1 order-2 md:order-1'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter'>Branding</h2>
                        <p className='py-10 text-lg tracking-tight'>Our approach connects brand and user experience closely. We specialize in creating and presenting digital brand identities on all platforms. We also provide strategy help and guidelines to keep everything consistent.</p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 text-lg tracking-tight'>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Branding</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Brand Indentity</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Corporate Identity</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Brand Strategy</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Motion Graphics</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' /> Graphics Design</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' /> Startup Building</li>
                        </ul>
                    </div>
                    <div className='col-span-1 order-1 md:order-2'>
                        <video autoPlay muted loop playsInline preload='none' style={{ width: '100%', height: 'auto' }}>
                            <source src="/videos/ui.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-40'>
                    <div className='col-span-1 order-2'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter'>UI/UX Design</h2>
                        <p className='py-10 text-lg tracking-tight'>At HashBitStudio, we believe everyone should have a great user experience, whether at work or in their free time. We create memorable products for businesses and consumers, and we provide easy-to-use design systems for smooth product updates.</p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 text-lg tracking-tight'>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />UI UX Design</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />UI UX Consulting</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />UX Audit</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />UX Research</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' />Usability Testing</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' /> Wireframe and Prototyping</li>
                            <li className='flex items-center gap-2 group cursor-pointer'><FaArrowRight className='group-hover:translate-x-1 transition-all' /> Design System</li>
                        </ul>
                    </div>
                    <div className='col-span-1 order-1'>
                        <video autoPlay muted loop playsInline preload='none' style={{ width: '100%', height: 'auto' }}>
                            <source src="/videos/ui.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 pb-40'>
                    <div className='col-span-1 order-2'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter'>Website Development</h2>
                        <p className='py-10 text-lg tracking-tight'>
                            At HashBitStudio, we specialize in creating high-performance, secure, and scalable websites.
                            From custom web applications to eCommerce platforms, our development services are designed
                            to meet the unique needs of your business.
                        </p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 text-lg tracking-tight'>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Custom Web Development
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> eCommerce Development
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> CMS Development
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> API Integration
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Responsive Web Design
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Web Application Development
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Website Maintenance & Support
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1 order-1 md:order-2'>
                        <video autoPlay muted loop playsInline preload='none' style={{ width: '100%', height: 'auto' }}>
                            <source src="/videos/ui.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-40'>
                    <div className='col-span-1 order-2'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter'>Social Media Marketing</h2>
                        <p className='py-10 text-lg tracking-tight'>
                            At HashBitStudio, we help you amplify your brand&apos;s presence on social media platforms.
                            Our tailored strategies and creative content ensure your brand connects with the right audience,
                            driving engagement and growth.
                        </p>
                        <ul className='grid grid-cols-2 gap-2 text-lg tracking-tight'>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Social Media Strategy
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Content Creation & Curation
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Social Media Advertising
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Community Management
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Influencer Marketing
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Social Media Analytics
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Social Media Reporting
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Campaign Management
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1 order-1'>
                        <video autoPlay muted loop playsInline preload='none' style={{ width: '100%', height: 'auto' }}>
                            <source src="/videos/ui.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 pb-40'>
                    <div className='col-span-1 order-2'>
                        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter'>Search Engine Optimization (SEO)</h2>
                        <p className='py-10 text-lg tracking-tight'>
                            At HashBitStudio, we optimize your website to rank higher in search engine results,
                            ensuring increased visibility and traffic. Our SEO strategies are designed to help your
                            business reach its full online potential.
                        </p>
                        <ul className='grid grid-cols-2 gap-2 text-lg tracking-tight'>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Keyword Research
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> On-Page SEO
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Off-Page SEO
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Technical SEO
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Local SEO
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> SEO Audits & Reports
                            </li>
                            <li className='flex items-center gap-2 group cursor-pointer'>
                                <FaArrowRight className='group-hover:translate-x-1 transition-all' /> Link Building
                            </li>
                        </ul>
                    </div>

                    <div className='col-span-1 order-1 md:order-2'>
                        <video autoPlay muted loop playsInline preload='none' style={{ width: '100%', height: 'auto' }}>
                            <source src="/videos/ui.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e1ed] text-[#111]'>
                <AuroraBackground>
                    <div
                        className="relative flex flex-col gap-4 py-0 items-center justify-center px-10 md:px-20 lg:px-40"
                    >
                        <h2 className="text-3xl md:text-5xl tracking-tighter font-bold dark:text-white text-center">
                            Innovating Digital Product Design for Every Industry
                        </h2>
                        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                            Free Consultation
                        </button>
                        <p className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
                            We've partnered with numerous businesses across various industries to craft exceptional digital products. Here are some sectors where we excel, though our expertise reaches well beyond these:
                        </p>

                    </div>
                </AuroraBackground>
                <div>
                    <HorizontalScroll classNames="bg-[#FAFAFA]" />
                </div>
            </div>
            <div className='bg-neutral-900 text-white w-full py-20 px-10 md:px-20 lg:px-40'>
                <h2 className='text-3xl font-bold tracking-tight'>Why Partner with HashBitStudio for Your Digital Product Design?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20'>
                    {
                        whyChooseOurServicesData.map((data) =>
                            <div className='flex flex-col items-start gap-4 relative group cursor-pointer' key={data.number}>
                                <span className='rounded-full h-10 w-10 border-2 group-hover:border-0 font-bold group-hover:text-neutral-900 group-hover:bg-cyan-400 transition-all absolute -top-2 right-0 md:-left-12 flex items-center justify-center'>{data.number}</span>
                                <h3 className='text-xl tracking-tight md:text-2xl font-bold'>{data.title}</h3>
                                <p className='text-lg md:text-xl font-light tracking-tight'>{data.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
                <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">Have a Project Idea?</h2>
                <img src="/assets/contact_bg.webp" alt="Contact Image" className="object-cover absolute bottom-0 left-0" />
                <div className="mt-10 md:mt-4 z-10">
                    <LeadForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurServices

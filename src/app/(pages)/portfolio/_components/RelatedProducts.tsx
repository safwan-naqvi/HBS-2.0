"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CustomCursor from './CustomCursor';
import Link from 'next/link';


const RelatedProjects = ({ project }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    console.log(project.data[0].attributes)
    return (
        <div
            className={cn(`w-full py-20 bg-[#d3d3d3] relative`)}
            style={{ cursor: 'none' }} // Hide the default cursor
        >

            {/* Add the Custom Cursor */}
            <CustomCursor isHovered={isHovered} />
            <Carousel className="w-full mx-auto max-w-7xl" opts={{
                align: "start",
            }}>
                <CarouselContent>
                    {
                        project.data[0].attributes.profile_items.data.map((item: any) => {
                            return <Link href={`/portfolio/${item.attributes.slug}`} className='w-full' key={item.id}><CarouselItem className='relative md:basis-1/2 lg:basis-1/2 w-[300px] shrink-0' key={item.id}>

                                <motion.div
                                    className={cn(`max-w-[400px] group overflow-hidden mx-auto`)}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img
                                        src={item.attributes.images.data[0].attributes.url}
                                        alt={item.attributes.title}
                                        className='group-hover:scale-110 transition-all w-[300px] object-cover h-[300px]'
                                    />

                                </motion.div>
                                <div className="text-black mt-6 px-2 sm:px-44 md:px-8 lg:px-0">
                                    <h3 className="text-lg md:text-2xl tracking-tighter font-semibold">{item.attributes.title}</h3>
                                    <p className="text-sm md:text-md text-black/70 font-light tracking-tight">{item.attributes.category}</p>
                                </div>
                            </CarouselItem >
                            </Link>
                        })
                    }
                </CarouselContent >
            </Carousel >

        </div>
    );
};

export default RelatedProjects;

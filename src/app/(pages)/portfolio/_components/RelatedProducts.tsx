// RelatedProducts.tsx
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CustomCursor from './CustomCursor';


const RelatedProducts = ({ product }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className='relative md:basis-1/2 lg:basis-1/3'>
                            <motion.div
                                className={cn(`max-w-[400px] group overflow-hidden mx-auto`)}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339/654b53eb91a1d927b494c5b8_Finany.webp"
                                    alt=""
                                    className='group-hover:scale-110 transition-all'
                                />

                            </motion.div>
                            <div className="text-black mt-6 px-10 sm:px-44 md:px-8 lg:px-0">
                                <h3 className="text-2xl tracking-tighter font-semibold">Web Design</h3>
                                <p className="text-black/70 font-light tracking-tight">Best Porjecs</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default RelatedProducts;

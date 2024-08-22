import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface CategoryProps {
    title: string;
    classNames?: string;
    slug: string;
    isActive: boolean;
    onClick: () => void;
}

const Category = ({ title, classNames, slug, isActive, onClick }: CategoryProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'cursor-pointer text-white font-semibold tracking-tighter relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-md lg:text-xl',
                isActive ? 'text-emerald-400' : '',
                classNames
            )}
        >
            {title}
        </button>
    )
}

export default Category;

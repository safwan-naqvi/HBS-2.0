import React from 'react'
import Category from './Category'
import { usePathname, useSearchParams } from 'next/navigation'

const CategoriesTab = ({ data: CategoryData }: any) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get the active category from the search params (assuming 'category' is the key)
    const activeCategory = searchParams.get('category');

    const isActiveLink = (category: any) => {
        return category.attributes.slug === activeCategory;
    }
    return (
        <div className='flex items-center gap-6 mt-10'>
            <Category title={"Recent"} slug={"/blogs"} classNames={`${pathname === '/blogs' ? 'text-emerald-400' : ""}`} />
            {CategoryData?.data.map((category: any) =>
                <Category title={category.attributes.title} slug={category.attributes.slug} key={category.id} classNames={`${isActiveLink(category) ? 'text-emerald-400' : ""}`} />
            )}
        </div>
    )
}

export default CategoriesTab

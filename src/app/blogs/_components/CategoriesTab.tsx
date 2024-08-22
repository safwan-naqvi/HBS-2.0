import React from 'react'
import Category from './Category'
import { usePathname, useSearchParams } from 'next/navigation'
import { ICategory, ICollectionResponse } from '@/types';
import { CiSearch } from "react-icons/ci";
import { Search } from './Search';
interface CategoriesTabProps {
    data: ICollectionResponse<ICategory[]>;
    onCategorySelect: (categoryId: number | null) => void;
    selectedCategory: number | null;
}

const CategoriesTab = ({ data: CategoryData, onCategorySelect, selectedCategory }: CategoriesTabProps) => {
    const pathname = usePathname();

    // Handler to set the selected category
    const handleCategoryClick = (categoryId: number | null) => {
        onCategorySelect(categoryId);
    };

    return (
        <div className='flex flex-col lg:flex-row items-center gap-6 mt-10'>
            <div className='flex items-center gap-6'>
                <Category
                    title="Recent"
                    slug="/blogs"
                    isActive={!selectedCategory}
                    onClick={() => handleCategoryClick(null)}
                />
                {CategoryData?.data.map((category: ICategory) =>
                    <Category
                        key={category.id}
                        title={category.attributes.title}
                        slug={category.attributes.slug}
                        isActive={selectedCategory === category.id}
                        onClick={() => handleCategoryClick(category.id)}
                    />
                )}
            </div>
            <Search />

        </div>
    );
};

export default CategoriesTab;

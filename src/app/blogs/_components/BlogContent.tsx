"use client";
import { fetchBlogs, fetchBlogsByCategory, fetchCategories } from '@/axios/api';
import LottiePlayer from '@/components/common/LottieAnimation/LottiePlayer';
import Ripple from '@/components/magicui/ripple';
import { IArticle, ICategory, ICollectionResponse } from '@/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import CategoriesTab from './CategoriesTab';
import Articles from './Articles';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const BlogContent = () => {

    const queryClient = useQueryClient();

    // State to track selected category
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    // Fetch categories
    const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useQuery<ICollectionResponse<ICategory[]>>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    // Fetch blogs based on selected category
    const { data: blogData, error: blogError, isLoading: blogLoading } = useQuery<ICollectionResponse<IArticle[]>>({
        queryKey: ['blogs', selectedCategory],
        queryFn: () => selectedCategory !== null ? fetchBlogsByCategory(selectedCategory, '') : fetchBlogs(),
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    // Handler for category selection
    const handleCategorySelect = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
        // Optionally prefetch the data for the selected category
        queryClient.prefetchQuery({ queryKey: ['blogs'], queryFn: () => fetchBlogsByCategory(categoryId, '') });
    };

    if (categoryLoading) {
        return (
            <div className='flex items-center justify-center w-full h-screen'>
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
                    <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
                        Loading
                    </p>
                    <Ripple />
                </div>
            </div>
        );
    }

    if (categoryError || blogError) {
        return (
            <div className='flex items-center justify-center w-full h-full'>
                <LottiePlayer src="/assets/anims/error.json" />
            </div>
        );
    }
    return (
        <div className='h-full w-full pt-[120px] max-w-7xl mx-auto px-10'>
            <div className='flex text-white items-center justify-between gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                <div className="flex items-center">
                    <div className="flex h-8 w-8 relative items-center justify-center"><span className="animate-ping absolute h-8 w-8 rounded-full bg-[#7124b0] opacity-75"></span><span className="relative rounded-full h-8 w-8 bg-[#8327e6]"></span></div>
                    <h1 className="ml-2 text-4xl tracking-tighter font-semibold">Explore Blogs</h1>
                </div>
            </div>
            {!!categoryData && (
                <CategoriesTab
                    data={categoryData}
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                />
            )}
            <div className='mt-10 w-full grid grid-cols-4 gap-4 fade-in'>
                {blogLoading ? (
                    <ArticleSkeleton count={4} />
                ) : blogData && blogData.data.length > 0 ? (
                    blogData.data.map((article: IArticle) => (
                        <Articles key={article.id} article={article} />
                    ))
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        <p className='text-white text-center w-full mt-20'>No articles found for this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogContent;

export function ArticleSkeleton({ count }: { count: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='bg-white/10 text-black'>
                    <Skeleton className='w-full h-48' />
                    <div className='p-3 h-full min-h-[200px]'>
                        <Skeleton className='h-6 w-3/4 mb-2' />
                        <Skeleton className='h-4 w-full mb-1' />
                        <Skeleton className='h-4 w-full mb-1' />
                        <Skeleton className='h-4 w-5/6' />
                    </div>
                </div>
            ))}
        </>
    );
}

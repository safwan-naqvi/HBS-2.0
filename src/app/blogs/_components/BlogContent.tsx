"use client";
import { fetchBlogsByCategory, fetchCategories } from '@/axios/api';
import LottiePlayer from '@/components/common/LottieAnimation/LottiePlayer';
import Ripple from '@/components/magicui/ripple';
import { IArticle, ICategory, ICollectionResponse } from '@/types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import CategoriesTab from './CategoriesTab';
import Articles from './Articles';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from '@/components/ui/pagination'; // Import your custom pagination components
import { useSearchParams } from 'next/navigation';

const BlogContent = () => {
    const queryClient = useQueryClient();
    const searchParams = useSearchParams();
    // State to track selected category and pagination
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 6; // Define your page size

    const query = searchParams.get("query") || ""; // Get the search query from the URL

    // Fetch categories
    const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useQuery<ICollectionResponse<ICategory[]>>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    // Fetch blogs based on selected category, search query, and page
    const { data: blogData, error: blogError, isLoading: blogLoading } = useQuery<ICollectionResponse<IArticle[]>>({
        queryKey: ['blogs', selectedCategory, currentPage, query],
        queryFn: () => fetchBlogsByCategory(selectedCategory, query, currentPage, pageSize),
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    // Handler for category selection
    const handleCategorySelect = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1); // Reset to first page when changing category
        queryClient.prefetchQuery({ queryKey: ['blogs'], queryFn: () => fetchBlogsByCategory(categoryId, query, 1, pageSize) });
    };

    // Handler for page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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

    const totalPages = blogData?.meta?.pagination?.pageCount || 1;

    return (
        <div className='h-full w-full pt-[120px] max-w-7xl mx-auto px-10'>
            {!!categoryData && (
                <CategoriesTab
                    data={categoryData}
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                />
            )}
            <Suspense>
                <div className='mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {blogLoading ? (
                        <ArticleSkeleton count={4} />
                    ) : blogData && blogData.data.length > 0 ? (
                        blogData.data.map((article: IArticle) => (
                            <Articles key={article.id} article={article} />
                        ))
                    ) : (
                        <div className='w-full h-full flex items-center justify-center'>
                            <p>No articles found for this category.</p>
                        </div>
                    )}
                </div>
                {totalPages > 1 && (
                    <Pagination className="mt-8">
                        <PaginationContent>
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    />
                                </PaginationItem>
                            )}
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        isActive={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            {currentPage < totalPages && (
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                )}
            </Suspense>
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

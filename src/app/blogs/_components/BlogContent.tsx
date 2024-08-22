"use client";
import { fetchBlogs, fetchCategories } from '@/axios/api';
import LottiePlayer from '@/components/common/LottieAnimation/LottiePlayer';
import Ripple from '@/components/magicui/ripple';
import { ICategory, ICollectionResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import CategoriesTab from './CategoriesTab';
import Articles from './Articles';
import { Skeleton } from '@/components/ui/skeleton';

const BlogContent = () => {
    const { data: categoryData, error, isLoading } = useQuery<ICollectionResponse<ICategory[]>>({
        queryKey: ['categories'],
        queryFn: async () => {
            const data = await fetchCategories();
            return data;
        },
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    const { data: blogData, error: blogError, isLoading: blogLoading } = useQuery<any>({
        queryKey: ['blogs'],
        queryFn: async () => {
            const data = await fetchBlogs();
            return data;
        },
        staleTime: 1000 * 60 * 5,  // 5 minutes
    });

    if (isLoading) {
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

    if (error) {
        return (
            <div className='flex items-center justify-center w-full h-full'>
                <LottiePlayer src="/assets/anims/error.json" />
            </div>
        );
    }

    return (
        <div className='h-full w-full pt-[120px] max-w-7xl mx-auto px-10'>
            {!!categoryData && <CategoriesTab data={categoryData} />}
            {blogError && (
                <div className='w-full h-full flex items-center justify-center'>
                    {blogError.message}
                </div>
            )}
            <div className='mt-10 w-full grid grid-cols-4 gap-4'>
                {blogLoading ? (
                    <ArticleSkeleton count={4} />
                ) : (
                    blogData && blogData.data.map((article: any) => (
                        <Articles key={article.id} article={article} />
                    ))
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

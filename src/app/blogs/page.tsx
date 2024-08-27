import Loading from '@/components/common/Loading';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogContent from './_components/BlogContent';

export const metadata: Metadata = {
    title: "HashBitStudio | Blogs",
    description: "Explore All Blogs on HashBitStudio",
};


const Blogs = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='w-full tracking-tight fade-in'>
                <BlogContent />
                {/* <Footer /> */}
            </div>
        </Suspense>

    );
};

export default Blogs;



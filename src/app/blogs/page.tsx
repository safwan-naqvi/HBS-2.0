import Loading from '@/components/common/Loading';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogContent from './_components/BlogContent';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: "Blogs",
    description: "Discover expert insights, tips, and trends in design, development, and digital deployment on HashBitStudio's blog. Stay ahead in the digital world.",
};

const Blogs = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='w-full tracking-tight fade-in'>
                <BlogContent />
                <Footer />
            </div>
        </Suspense>

    );
};

export default Blogs;



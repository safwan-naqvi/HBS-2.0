
import BlogContent from './_components/BlogContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "HashBitStudio | Blogs",
    description: "Explore All Blogs on HashBitStudio",
};


const Blogs = () => {
    return (
        <div>
            <div className='w-full tracking-tight'>
                <BlogContent />
                <div className='text-white fade-in max-w-7xl mx-auto px-10 lg:px-20'>
                </div>
            </div>
        </div>

    );
};

export default Blogs;



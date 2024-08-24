import { fetchBlogBySlug, fetchRelatedBlogs } from '@/axios/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatData } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { RichTextContent } from '../_components/RickTextContent';

const page = async ({ params }: any) => {
    const blog = await fetchBlogBySlug(params.slug)
    if (!blog?.data[0]) {
        notFound();
    }
    let relatedBlogs = null
    if (blog?.data[0]) {
        relatedBlogs = await fetchRelatedBlogs(blog?.data[0].attributes.category.data.id, params.slug)
    }
    // Function to shuffle and select random elements
    const getRandomBlogs = (blogs: any[], count: number) => {
        const shuffled = blogs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    const blogsToDisplay = relatedBlogs?.data.length > 2 ? getRandomBlogs(relatedBlogs.data, 2) : relatedBlogs?.data;
    return (
        <div className='max-w-7xl mx-auto w-full p-8 fade-in'>
            <section
                id="section"
                className="py-24 sm:py-24 relative w-full justify-center flex items-center"
            >
                <div
                    id="container"
                    className=" px-6 sm:px-24 w-full h-full flex flex-col items-center"
                >
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row items-center gap-2 text-white border-b-white border-b-2 pb-5 justify-between">
                            <Link href="/blogs" className='flex items-center gap-2 group'>
                                <IoChevronBackCircleSharp className='h-8 w-8 group-hover:text-[#782d6b] transition-all' />
                                <span className='tracking-tighter group-hover:text-[#782d6b] transition-all'>Go Back</span>
                            </Link>

                            <div className="flex flex-wrap items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={blog?.data[0]?.attributes.author.data.attributes.avatar.data.attributes.url} alt={blog?.data[0]?.attributes.author.data.attributes.name} />
                                    <AvatarFallback>HB</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col'>
                                    <p>{blog?.data[0]?.attributes.author.data.attributes.name}</p>
                                    <p className='text-sm tracking-tighter'>{formatData(blog?.data[0]?.attributes?.updatedAt)}</p>
                                </div>
                            </div>


                        </div>
                        <div className="py-6">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold leading-10 tracking-tight">
                                {blog?.data[0]?.attributes?.Title}
                            </h1>
                            <Badge className='mt-2' variant={"outline"}>{blog?.data[0].attributes.category.data.attributes.title}</Badge>
                        </div>
                        <div className="aspect-auto h-[45vh] sm:h-[65vh] w-full">
                            <Image
                                src={blog.data[0].attributes.image.data.attributes.url}
                                alt={blog.data[0].attributes.Title}
                                width={640}
                                height={800}
                                quality={100}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-white w-full sm:w-[60vw] flex justify-center items-start flex-col">
                        <div className="w-full">
                            <RichTextContent content={blog.data[0].attributes.content} />
                        </div>
                        <div className='mt-10 grid grid-cols-2 gap-2'>
                            {
                                blogsToDisplay?.map((relatedBlog: any, index: number) => (
                                    <div key={index} className={`w-full bg-white/10 rounded-md p-2 group ${blogsToDisplay.length === 1 ? 'col-span-2' : 'col-span-2 xl:col-span-1'}`}>
                                        <Link href={`/blogs/${relatedBlog.attributes.slug}`}>
                                            <div className="flex h-full justify-start group gap-2 transition-all">
                                                <Image
                                                    src={relatedBlog.attributes.image.data.attributes.url}
                                                    alt={relatedBlog.attributes.Title}
                                                    width={400}
                                                    height={400}
                                                    quality={100}
                                                    className="w-[120px] h-[120px] transition-all rounded-lg aspect-square object-contain"
                                                />
                                                <div className='flex flex-col justify-between gap-2 h-full'>
                                                    <div>
                                                        <div className="relative before:absolute hover:text-white before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.01] group-hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span className="relative"> {relatedBlog.attributes.Title}</span></div>
                                                        <p className='text-sm text-gray-400 group-hover:text-gray-50 transition-all tracking-tight overflow-hidden line-clamp-1'>{relatedBlog.attributes.excerpt}</p>
                                                    </div>

                                                    <div className="self-baseline flex flex-wrap items-center gap-2">
                                                        <Avatar>
                                                            <AvatarImage src={relatedBlog.attributes.author.data.attributes.avatar.data.attributes.url} alt={relatedBlog.attributes.author.data.attributes.name} />
                                                            <AvatarFallback>HB</AvatarFallback>
                                                        </Avatar>
                                                        <p className='text-white hover:text-white'>{relatedBlog.attributes.author.data.attributes.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page

import { fetchBlogBySlug } from '@/axios/api';
import Image from 'next/image';
const page = async ({ params }: any) => {
    const blog = await fetchBlogBySlug(params.slug)
    const datePublished = new Date(blog?.data[0]?.attributes?.updatedAt).toLocaleString();

    return (
        <div className='max-w-7xl mx-auto w-full p-8'>
            <section
                id="section"
                className="py-24 sm:py-24 relative w-full justify-center flex items-center"
            >
                <div
                    id="container"
                    className=" px-6 sm:px-24 w-full h-full flex flex-col items-center"
                >
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col sm:flex-row text-white border-b-white border-b-2 pb-5 justify-between items-start sm:items-center">
                            <div>
                                {/* <p>{blog.attauthor}</p> */}
                                <p>{datePublished}</p>
                            </div>
                            <div className="flex flex-wrap">

                            </div>
                        </div>
                        <div className="py-6">
                            <h1 className="text-6xl text-white font-bebas leading-none">
                                {blog?.data[0]?.attributes?.Title}
                            </h1>
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
                        <div className="markdown-body">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page


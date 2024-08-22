import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }: any) => {
    return (
        <Link href={`/blogs/${post.attributes.slug}`} key={post.id} className='max-h-[250px]'>
            <div>
                <img src={post.attributes.image.data.attributes.formats.medium["url"]} alt={post.attributes.Title} />
            </div>
            <div className="bg-white/90 p-4 text-black h-full shadow-sm">
                <h3 className='text-xl font-semibold tracking-tight'>{post.attributes.Title}</h3>
                <p className='text-sm tracking-tight overflow-hidden line-clamp-5'>{post.attributes.excerpt}</p>
            </div>
        </Link>
    )
}

export default BlogCard

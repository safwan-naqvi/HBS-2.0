import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Articles = ({ article }: any) => {
    return (
        <Link href={`/blogs/${article.attributes.slug}`} className='bg-white/90 text-black group'>
            <div className='overflow-hidden h-[200px] w-full'>
                <Image src={article.attributes.image.data.attributes.url} alt='article.attributes.Title' height={600} width={400} className='h-full w-full group-hover:scale-110 transition-all object-cover' />
            </div>
            <div className='p-3 h-full min-h-[200px]'>
                <h3 className='text-xl tracking-tight font-semibold'>{article.attributes.Title}</h3>
                <p className='text-sm truncate line-clamp-3 text-wrap'>{article.attributes.excerpt}</p>
            </div>
            {/* <Image src={article.attributes.author.data.attributes.avatar.url} alt='article.attributes.Title' height={50} width={50} className='h-full w-full group-hover:scale-110 transition-all object-cover' /> */}
        </Link>
    )
}

export default Articles

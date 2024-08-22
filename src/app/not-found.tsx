import LottiePlayer from '@/components/common/LottieAnimation/LottiePlayer'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Link href="/" className='flex flex-col group items-center justify-center gap-0 h-full w-fit mx-auto '>
            <div className='h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px]'>
                <LottiePlayer src="/assets/anims/error.json" />
            </div>
            <p className='text-white tracking-tight text-4xl font-semibold group-hover:text-[#5391cf] transition-all'>Return Home</p>
        </Link>
    )
}
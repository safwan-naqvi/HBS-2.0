import Ripple from '@/components/magicui/ripple'
import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
                    Loading
                </p>
                <Ripple />
            </div>
        </div>
    )
}

export default Loading

"use client"
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function LottiePlayer({ src }: { src: string }) {
    return (
        <div className='w-full overflow-hidden'>
            <Player
                autoplay
                loop
                src={src}
                style={{ height: 'auto', width: 'auto', maxWidth: '550px', objectFit: 'contain' }}
                className='h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px]'
            >
                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div >
    )
}

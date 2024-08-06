import DataDriven from '@/components/icons/data-driven'
import ExpertTeam from '@/components/icons/expert-team'
import ResponsiveAgility from '@/components/icons/responsive-agility'
import StrategicInnovation from '@/components/icons/strategic-innovation'
import TransparentProcess from '@/components/icons/transparent-process'
import UserCentricCode from '@/components/icons/user-centric-code'
import React from 'react'

const WhatDifference = () => {
    return (
        <div className='bg-slate-50 py-40 px-10 md:px-20 lg:px-40 space-y-10'>
            <h2 className='text-5xl font-bold max-w-xl'>What <span className='text-slate-400'>Makes Us Different</span> From Others</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                <div className='space-y-3'>
                    <UserCentricCode />
                    <h3 className='text-3xl font-semibold tracking-tight'>User-Centric Core</h3>
                    <p>People are first, always. We immerse ourselves in your users' perspectives, shaping designs that resonate and drive meaningful interactions.</p>
                </div>
                <div className='space-y-3'>
                    <ExpertTeam />
                    <h3 className='text-3xl font-semibold tracking-tight'>Expert Team</h3>
                    <p>Our skilled designers bring diverse expertise, ensuring a holistic approach to every project for superior results.</p>
                </div>
                <div className='space-y-3'>
                    <StrategicInnovation />
                    <h3 className='text-3xl font-semibold tracking-tight'> Strategic Innovation</h3>
                    <p>We don't merely follow trends; rather, we help to define them. Our designs are driven by insights, which results in experiences that have an impact.</p>
                </div>
                <div className='space-y-3'>
                    <DataDriven />
                    <h3 className='text-3xl font-semibold tracking-tight'> Data-Driven Decisions</h3>
                    <p>Our approach combines creativity with insights, using user data to refine designs that are not only appealing but also effective.</p>
                </div>
                <div className='space-y-3'>
                    <TransparentProcess />
                    <h3 className='text-3xl font-semibold tracking-tight'>Transparent Process</h3>
                    <p>Our open communication ensures you're informed every step, fostering trust and confidence in the design journey.</p>
                </div>
                <div className='space-y-3'>
                    <ResponsiveAgility />
                    <h3 className='text-3xl font-semibold tracking-tight'>Responsive Agility</h3>
                    <p>Our flexible structure allows us to adapt swiftly, ensuring your designs remain responsive to changing user needs.</p>
                </div>
            </div>
        </div>

    )
}

export default WhatDifference

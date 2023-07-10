"use client"
import Image from 'next/image'
import bg1 from '@/public/images/bg2.jpg'
 

export default function Background() {
	return (
		<>
		<Image className='absolute top-0 left-0 h-full w-full -z-10 object-cover object-[20%_50%] opacity-30' src={bg1} alt='Bg image'/>
		<div className='absolute top-0 left-0 h-full w-full shadow-[0_0_210px_122px_rgba(0,0,0,0.8)_inset]'></div>
		</>
	)
}

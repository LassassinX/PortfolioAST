"use client"
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Carousel({ gameData }: {
	gameData: any
}) {
	useEffect(() => {
		let swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			parallax: true,
			// pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index: number, className: string) {
					if (index === 0) {
						return `<div class="${className} about">
						</div>`;
					}
					if (index === 1) {
						return `<div class="${className} home">
							<span>
								home
							</span>
						</div>`;
					}
					return `<div class="${className}" style="
						background-image: url(${gameData[index - 2].cover_url});
					">
						
					</div>`;
				},
				bulletClass: 'pagination-card',
				bulletElement: 'div',
				bulletActiveClass: 'active',
			},
		});

		// set starting slide to 1
		swiper.slideTo(1, 0, false);

		return () => {
			swiper.destroy(true, true);
		}
	}, [])

	return (
		<>
			<div className='grow'>
				<div className="swiper h-full">
					<div className="swiper-wrapper">
						{/* About slide */}
						<div className="swiper-slide">Slide 1</div>
						{/* Home slide */}
						<div className="swiper-slide !flex flex-col items-center justify-center">
							<div className='prose text-white text-center'>
								<h1 className='font-title text-9xl
								from-[#fb0b0b] via-[#980023] to-[rgba(121,9,96,1)] via-70% bg-gradient-to-b
							bg-clip-text text-transparent drop-shadow-[5px_11px_0px_rgba(0,0,0,0.75)] p-2'>
									Game Developer
								</h1>
								<p>
									My name is Ahmed Saad Tanim. I'm a creative professional with more than 5 years of experience in the field of game development. I have worked on a wide range of projects, including 2D and 3D games, mobile games, and VR games. I have also worked on a variety of platforms, including PC, mobile, and VR. I have a strong passion for game development and I'm always looking for new challenges. I'm currently working as a freelance game developer and I'm looking for new opportunities.
								</p>
							</div>
						</div>
						{/* Dynamic game slides */}
						{
							gameData.map((game: any, index: number) => {
								return (
									<div key={index} className="swiper-slide">{game.title}</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<div className='swiper-pagination flex items-center justify-center w-full gap-6 mb-10'>
			</div>
		</>
	)
}

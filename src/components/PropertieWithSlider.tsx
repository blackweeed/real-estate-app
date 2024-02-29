"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface MediaItem {
	mediaItemUrl: string;
}

type PropertieWithSliderProps = {
	buyOrLease: string;
	images: MediaItem[];
};
export const PropertieWithSlider = ({ buyOrLease, images }: PropertieWithSliderProps) => {
	const swiperRef = useRef(null);
	return (
		<div className="group relative h-[80%] w-full cursor-pointer overflow-hidden rounded-lg">
			<div className="absolute left-3 top-3 z-20 flex h-8 w-fit items-center justify-center rounded-md bg-white/60 px-2 font-semibold uppercase text-blue-600">
				{buyOrLease}
			</div>
			<Swiper
				className="h-full w-full"
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{images.map((image) => (
					<SwiperSlide key={image.mediaItemUrl} className="h-full w-full bg-black text-white">
						<Image className="object-cover transition " src={image.mediaItemUrl} alt="" fill />
					</SwiperSlide>
				))}
				<div className="absolute inset-0 left-0 right-0 top-0 hidden items-center justify-between px-4 group-hover:flex">
					<button
						onClick={(e) => {
							e.preventDefault();
							swiperRef.current?.slidePrev();
						}}
						className="z-50 text-3xl text-blue-600"
					>
						<ChevronLeft strokeWidth={1.25} size={60} />
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							swiperRef.current?.slideNext();
						}}
						className="z-50 text-3xl text-blue-600"
					>
						<ChevronRight strokeWidth={1.25} size={60} />
					</button>
				</div>
			</Swiper>
		</div>
	);
};

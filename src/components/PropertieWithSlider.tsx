"use client";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface MediaItem {
	mediaItemUrl: string;
}

type PropertieWithSliderProps = {
	buyOrLease: string;
	images: MediaItem[];
};
export const PropertieWithSlider = ({ buyOrLease, images }: PropertieWithSliderProps) => {
	console.log(images);

	return (
		<div className="relative h-[80%] w-full cursor-pointer overflow-hidden rounded-lg">
			<div className="absolute left-3 top-3 z-30 flex h-8 w-24 items-center justify-center rounded-md bg-white/60 font-semibold uppercase text-blue-600">
				{buyOrLease}
			</div>
			<Swiper
				className="h-full w-full"
				modules={[Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{images.map((image) => (
					<SwiperSlide key={image.mediaItemUrl} className="h-full w-full bg-black text-white">
						<Image className="object-cover transition " src={image.mediaItemUrl} alt="" fill />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

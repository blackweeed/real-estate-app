"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type mediaItemUrlType = {
	mediaItemUrl: string;
};

type ImageGalleryProps = {
	buyOrLease: string;
	index: number;
	image: string;
	images: mediaItemUrlType[];
};

export const ImageGallery = ({ image, images, index, buyOrLease }: ImageGalleryProps) => {
	const [toggleGallery, setToggleGallery] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(2);

	const handleClick = (number: number) => {
		setToggleGallery((prev) => !prev);
		setPhotoIndex(number);
	};
	const prevPhoto = () => {
		if (photoIndex === 0) {
			setPhotoIndex(0);
		} else {
			setPhotoIndex((prev) => prev - 1);
		}
	};
	const nextPhoto = () => {
		if (photoIndex + 1 === images.length) {
			return;
		} else {
			setPhotoIndex((prev) => prev + 1);
		}
	};

	return (
		<>
			<div key={image} className="photoGallery-image relative h-full w-full">
				{index === 0 && (
					<div className="absolute left-3 top-3 z-30 flex h-8 w-40 items-center justify-center rounded-md bg-white/60 px-2 font-semibold uppercase text-blue-600">
						{buyOrLease}
					</div>
				)}
				<Image
					onClick={() => handleClick(index)}
					src={image ?? ""}
					alt=""
					fill
					className="cursor-pointer rounded-lg object-cover"
				/>
			</div>
			{toggleGallery && (
				<div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-black/80 px-6 lg:px-28">
					<button
						onClick={() => setToggleGallery(false)}
						className="mb-8 self-end rounded-full border p-4 lg:mb-0"
					>
						<X className="text-white" />
					</button>
					<div className="flex gap-10 overflow-hidden rounded-sm">
						<Image
							src={images[photoIndex].mediaItemUrl}
							alt="i"
							width={700}
							height={500}
							className="object-cover"
						/>
					</div>
					<div className="mt-4 flex w-full justify-between lg:justify-around">
						<button onClick={() => prevPhoto()} className="self-end rounded-full border p-4">
							<ChevronLeft className="text-white" />
						</button>
						<div className="text-center">
							{" "}
							<p className="mt-2 text-lg text-white">Zdjęcie numer: {photoIndex + 1}</p>
							<p className="text-lg text-white">Liczba zdjęć w galerii: {images.length}</p>
						</div>
						<button onClick={() => nextPhoto()} className="self-end rounded-full border p-4">
							<ChevronRight className="text-white" />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

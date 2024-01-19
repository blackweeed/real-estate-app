"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ImageGallery = ({ image, images, index, buyOrLease }) => {
  const [toggleGallery, setToggleGallery] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(2);

  const handleClick = (test) => {
    setToggleGallery((prev) => !prev);
    setPhotoIndex(test);
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
      <div key={image.mediaItemUrl} className="w-full h-full relative">
        {index === 0 && (
          <div className="z-30 bg-white/60 w-24 h-8 absolute top-3 left-3 flex justify-center items-center rounded-md text-blue-600 font-semibold uppercase">
            {buyOrLease}
          </div>
        )}
        <Image
          onClick={() => handleClick(index)}
          src={image ?? ""}
          alt=""
          fill
          className="rounded-lg object-cover cursor-pointer"
        />
      </div>
      {toggleGallery && (
        <div className="fixed bg-black/80 w-full h-screen top-0 left-0 right-0 z-50 flex flex-col items-center justify-center px-28">
          <button
            onClick={() => setToggleGallery(false)}
            className="p-4 border rounded-full self-end"
          >
            <X className="text-white" />
          </button>
          <div className="flex gap-10">
            <button
              onClick={() => prevPhoto()}
              className="p-4 border rounded-full self-end"
            >
              <ChevronLeft className="text-white" />
            </button>
            <Image
              src={images[photoIndex].mediaItemUrl}
              alt="i"
              width={700}
              height={500}
              className="object-cover"
            />
            <button
              onClick={() => nextPhoto()}
              className="p-4 border rounded-full self-end"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
          <p className="text-white text-lg mt-2">
            Zdjęcie numer: {photoIndex + 1}
          </p>
          <p className="text-white text-lg">
            Liczba zdjęć w galerii: {images.length}
          </p>
        </div>
      )}
    </>
  );
};

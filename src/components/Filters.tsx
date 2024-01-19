"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Filters = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = toggle ? "hidden" : "auto";
    };

    if (toggle) {
      document.body.style.overflow = "hidden"; // Disable scrolling on the body
    }

    // Set up the event listener
    window.addEventListener("resize", handleBodyOverflow);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
      window.removeEventListener("resize", handleBodyOverflow);
    };
  }, [toggle]);

  return (
    <>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="inline-flex gap-4 items-center font-semibold border rounded-full px-7 py-3 hover:text-blue-600 hover:border-black/50 transition duration-500 "
      >
        Filtry
        <SlidersHorizontal size={18} strokeWidth={2.75} />
      </button>
      <div
        // onClick={() => setToggle(false)}
        className={`${
          toggle ? "fixed" : "hidden"
        }  top-0 left-0 w-full h-full bg-black/40 z-40 flex justify-end`}
      >
        <div className="bg-white h-full w-[700px] z-50">
          <div className="">
            <div className="flex inset-0 justify-between items-center bg-slate-50 p-10">
              <h2 className="text-3xl text-blue-600 font-semibold">Filtry</h2>
              <button
                onClick={() => setToggle(false)}
                className="w-10 h-10 flex justify-center items-center border rounded-full "
              >
                <X />
              </button>
            </div>
            <div className="mt-16 px-10">
              <h3 className="text-blue-600 font-semibold text-xl mb-4">
                Filter by features
              </h3>
              <h4 className="text-lg font-semibold">Beds</h4>
              <div className="flex">
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="rounded-l-xl h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    Any
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    1+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className=" h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    2+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className=" h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    3+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="rounded-r-xl h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    4+
                  </div>
                </label>
              </div>
              <h4 className="text-lg font-semibold mt-6">Baths</h4>
              <div className="flex">
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="rounded-l-xl h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    Any
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="h-[50px]  w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    1+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className=" h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    2+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className=" h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    3+
                  </div>
                </label>
                <label className="label">
                  <input required type="radio" name="productSize" />
                  <div className="rounded-r-xl h-[50px] w-[50px] border border-[#dce5e4] flex items-center justify-center cursor-pointer hover:border-y-[black]">
                    4+
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

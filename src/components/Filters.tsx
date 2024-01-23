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
				className="flex items-center gap-4 place-self-start rounded-full border px-7 py-3 font-semibold transition duration-500 hover:border-black/50 hover:text-blue-600 lg:place-self-center "
			>
				Filtry
				<SlidersHorizontal size={18} strokeWidth={2.75} />
			</button>
			<div
				// onClick={() => setToggle(false)}
				className={`${
					toggle ? "fixed" : "hidden"
				}  left-0 top-0 z-40 flex h-full w-full justify-end bg-black/40`}
			>
				<div className="h-full w-[700px] bg-white ">
					<div className="">
						<div className="inset-0 flex items-center justify-between bg-slate-50 p-10">
							<h2 className="text-3xl font-semibold text-blue-600">Filtry</h2>
							<button
								onClick={() => setToggle(false)}
								className="flex h-10 w-10 items-center justify-center rounded-full border "
							>
								<X />
							</button>
						</div>
						<div className="mt-16 px-10">
							<h3 className="mb-4 text-xl font-semibold text-blue-600">Filter by features</h3>
							<h4 className="text-lg font-semibold">Beds</h4>
							<div className="flex">
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex h-[50px]  w-[50px] cursor-pointer items-center justify-center rounded-l-xl border border-[#dce5e4] hover:border-y-[black]">
										Any
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex  h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										1+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										2+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										3+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-r-xl border border-[#dce5e4] hover:border-y-[black]">
										4+
									</div>
								</label>
							</div>
							<h4 className="mt-6 text-lg font-semibold">Baths</h4>
							<div className="flex">
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex h-[50px]  w-[50px] cursor-pointer items-center justify-center rounded-l-xl border border-[#dce5e4] hover:border-y-[black]">
										Any
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex  h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										1+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										2+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center border border-[#dce5e4] hover:border-y-[black]">
										3+
									</div>
								</label>
								<label className="label">
									<input required type="radio" name="productSize" />
									<div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-r-xl border border-[#dce5e4] hover:border-y-[black]">
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

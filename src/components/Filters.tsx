"use client";

import { formatPrice } from "@/app/utils";
import { Check, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Slider from "react-slider";
import { twMerge } from "tailwind-merge";

export const Filters = () => {
	const MIN = 1000;
	const MAX = 20000;
	const [values, setvalues] = useState([MIN, MAX]);
	const [toggle, setToggle] = useState(false);
	const beds = [1, 2, 3, 4, 5];

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
				className="flex items-center gap-4 place-self-start rounded-full border px-4 py-2 font-semibold transition duration-500 hover:border-black/50 hover:text-blue-600 lg:place-self-center lg:px-7 lg:py-3 "
			>
				Filtry
				<SlidersHorizontal size={18} strokeWidth={2.75} />
			</button>
			<div
				className={`${
					toggle ? "fixed" : "hidden"
				}  left-0 top-0 z-40 flex h-full w-full justify-end bg-black/40`}
			>
				<div className="h-full w-[600px] bg-white ">
					<div className="">
						<div className="inset-0 flex items-center justify-between bg-slate-50 px-10 py-10 lg:px-20">
							<h2 className="text-3xl font-semibold text-blue-600">Filtry</h2>
							<button
								onClick={() => setToggle(false)}
								className="flex h-10 w-10 items-center justify-center rounded-full border "
							>
								<X />
							</button>
						</div>
						<div className="mt-8 px-10 lg:px-20">
							<h3 className="mb-4 text-xl font-semibold text-blue-600">Filtruj po cechach</h3>
							<h4 className="mb-3 text-lg font-semibold">Łóżka</h4>
							<div className="flex w-full flex-shrink overflow-hidden rounded-3xl border border-[#dce5e4]">
								<label className="label w-full">
									<input required type="radio" name="bed" />
									<div className="flex h-[50px] w-full cursor-pointer items-center justify-center border border-[#dce5e4] hover:bg-blue-600/20">
										Dow.
									</div>
								</label>
								{beds.map((item) => (
									<React.Fragment key={item}>
										<label className="label w-full ">
											<input required type="radio" name="bath" />
											<div className="flex h-[50px] w-full cursor-pointer items-center justify-center border border-[#dce5e4]   hover:bg-blue-600/20">
												{item}+
											</div>
										</label>
									</React.Fragment>
								))}
							</div>
							<h4 className="mb-3 mt-6 text-lg font-semibold">Łazienki</h4>
							<div className="flex w-full flex-shrink overflow-hidden rounded-3xl border border-[#dce5e4]">
								<label className="label w-full">
									<input required type="radio" name="bed" />
									<div className="flex h-[50px] w-full cursor-pointer items-center justify-center border border-[#dce5e4] hover:bg-blue-600/20">
										Dow.
									</div>
								</label>
								{beds.map((item) => (
									<React.Fragment key={item}>
										<label className="label w-full">
											<input required type="radio" name="bed" />
											<div className="flex h-[50px] w-full cursor-pointer items-center justify-center border border-[#dce5e4]  hover:bg-blue-600/20">
												{item}+
											</div>
										</label>
									</React.Fragment>
								))}
							</div>
						</div>
					</div>
					<div className="mt-6 px-10 lg:px-20">
						<h3 className="mb-4 text-xl font-semibold text-blue-600">Cena</h3>
						<div className="flex w-full justify-between">
							<p className="text-base font-medium lg:text-lg">{formatPrice(values[0])}</p>
							<p className="text-base font-medium lg:text-lg">{formatPrice(values[1])}</p>
						</div>
						<Slider
							className={twMerge(
								"mt-4 h-1 w-full cursor-pointer bg-blue-600",
								"[&>.thumb]:-top-2.5 [&>.thumb]:h-6 [&>.thumb]:w-6 [&>.thumb]:cursor-pointer [&>.thumb]:rounded-full [&>.thumb]:border-2 [&>.thumb]:border-blue-600 [&>.thumb]:bg-white",
							)}
							onChange={setvalues}
							value={values}
							min={MIN}
							max={MAX}
						/>
					</div>
					<div className="mt-20 flex w-full gap-4 px-10 lg:px-20">
						<button className="inline-flex w-full items-center justify-between  rounded-full border bg-white px-4 py-2 font-semibold tracking-wide text-black lg:px-8">
							Resetuj <RotateCcw />
						</button>
						<button className="inline-flex w-full items-center justify-between  rounded-full bg-blue-600 px-4 py-2 font-semibold tracking-wide text-white lg:px-8">
							Filtruj <Check />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

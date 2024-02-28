"use client";

import { Check, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Filters = () => {
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
				// onClick={() => setToggle(false)}
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
						<div className="mt-16 px-10 lg:px-20">
							<h3 className="mb-4 text-xl font-semibold text-blue-600">Filtruj po cechach</h3>
							<h4 className="mb-3 text-lg font-semibold">Łóżka</h4>
							<div className="flex w-full flex-shrink ">
								<label className="label w-full">
									<input required type="radio" name="bed" />
									<div className="flex h-[50px] w-full cursor-pointer items-center justify-center  border border-[#dce5e4] hover:bg-blue-600/20">
										Any
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
							<h4 className="mb-3 mt-6 text-lg font-semibold">Łazienki</h4>
							<div className="flex w-full flex-shrink ">
								<label className="label w-full">
									<input required type="radio" name="bed" />
									<div className="flex h-[50px] w-full cursor-pointer items-center justify-center  border border-[#dce5e4] hover:bg-blue-600/20">
										Any
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

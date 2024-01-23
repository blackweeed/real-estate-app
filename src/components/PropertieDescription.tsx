"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";

export const PropertieDescription = ({
	propertieDescription,
}: {
	propertieDescription: string;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const descriptionRef = useRef<HTMLDivElement | null>(null);

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
		if (descriptionRef.current) {
			descriptionRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	const displayedText = isExpanded
		? propertieDescription
		: propertieDescription.slice(0, 310) + "...";

	return (
		<div className="mt-6 max-w-[900px]" ref={descriptionRef}>
			<h2 className="text-4xl font-bold text-blue-600 lg:text-5xl">Opis nieruchomości</h2>
			<p
				className="mt-4 text-sm lg:text-base"
				dangerouslySetInnerHTML={{ __html: displayedText }}
			/>
			{propertieDescription.length > 200 && (
				<button
					onClick={toggleExpansion}
					className=" mt-4 flex cursor-pointer items-center gap-2 font-semibold hover:underline"
				>
					{isExpanded ? "Zwiń" : "Pokaż więcej"}
					{isExpanded ? <ChevronUp /> : <ChevronDown />}
				</button>
			)}
		</div>
	);
};

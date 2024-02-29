"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";

export const Description = ({ description }: { description: string }) => {
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

	const displayedText = isExpanded ? description : description.slice(0, 310) + "...";

	return (
		<div className=" max-w-[900px]" ref={descriptionRef}>
			<p
				className="mt-4 text-sm lg:text-base"
				dangerouslySetInnerHTML={{ __html: displayedText }}
			/>
			{description.length > 200 && (
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

import { UnlockKeyhole } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

export const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			aria-disabled={pending}
			className={twMerge(
				`${pending && "opacity-50"}`,
				`mt-10 flex w-full items-center justify-center gap-4 rounded-full border bg-blue-600 px-6 py-2.5 font-medium text-white`,
			)}
		>
			<span className="text-lg">Zaloguj</span> <UnlockKeyhole />
		</button>
	);
};

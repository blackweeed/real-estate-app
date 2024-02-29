"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmmitButton";
import { submitForm } from "@/app/actions";

const initialState = {
	message: "",
};
export const GetInTouch = () => {
	const [state, formAction] = useFormState(submitForm, initialState);
	const [messagePopup, setMessagePopup] = useState(false);

	const inputStyles = `bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`;

	return (
		<div className="mb-6 flex flex-col items-center justify-around lg:flex-row lg:bg-gray-50 lg:py-10">
			<div className="mb-8 flex max-w-[550px] items-center justify-center gap-2 lg:mb-40">
				<div className="px-6 lg:px-0">
					<h3 className="mb-3 text-3xl font-bold text-blue-600 lg:text-5xl">
						Skontaktuj się z nami!
					</h3>
					<p className="text-sm lg:text-base">
						Masz pytania? Skontaktuj się z nami! Nasi doświadczeni agenci stoją do Twojej
						dyspozycji. Zapraszamy do wypełnienia formularza
					</p>
				</div>
			</div>
			<form
				onSubmit={() => setMessagePopup(true)}
				action={formAction}
				className="flex h-[560px] w-full flex-col items-center justify-center gap-6 rounded-md border bg-gray-100 px-8 py-4 lg:w-[400px] lg:px-12"
			>
				<input
					type="text"
					id="first_name"
					name="first_name"
					className={`${inputStyles}`}
					placeholder="Imię"
				/>
				<input
					type="text"
					id="second_name"
					name="second_name"
					className={`${inputStyles}`}
					placeholder="Nazwisko"
				/>
				<input
					type="phone"
					id="phone_number"
					name="phone_number"
					className={`${inputStyles}`}
					placeholder="Numer telefonu"
				/>
				<textarea
					id="your_message"
					name="your_message"
					className={`${inputStyles} h-40 `}
					placeholder="Twoja wiadomość"
				/>
				<SubmitButton
					messagePopup={messagePopup}
					setMessagePopup={setMessagePopup}
					message={state.message}
				/>
			</form>
		</div>
	);
};

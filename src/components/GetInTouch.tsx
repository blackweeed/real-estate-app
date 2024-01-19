"use client";

import { submitForm } from "@/app/actions";
import { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmmitButton";

const initialState = {
  message: "",
};
export const GetInTouch = () => {
  const [state, formAction] = useFormState(submitForm, initialState);
  const [messagePopup, setMessagePopup] = useState(false);

  const inputStyles = `bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

  console.log(state);

  return (
    <div className="flex justify-around mb-6">
      <div className="flex gap-2 items-center mb-40 justify-center max-w-[550px]">
        <div>
          <h3 className="text-blue-600 text-5xl font-bold mb-3">
            Skontaktuj się z nami!
          </h3>
          <p>
            Masz pytania? Skontaktuj się z nami! Nasi doświadczeni agenci stoją
            do Twojej dyspozycji. Zapraszamy do wypełnienia formularza
          </p>
        </div>
      </div>
      <div className="">
        <form
          onSubmit={() => setMessagePopup(true)}
          action={formAction}
          className="flex flex-col w-[400px] h-[560px] bg-gray-100 border justify-center items-center gap-6 rounded-md px-8 py-4"
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
    </div>
  );
};

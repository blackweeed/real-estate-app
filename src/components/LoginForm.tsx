import { UnlockKeyhole } from "lucide-react";
import React from "react";

export const LoginForm = () => {
  return (
    <form className="mt-5">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Twój email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
        <label
          htmlFor="password"
          className="block my-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Hasło
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
        <button className="py-2.5 mt-10 w-full flex px-6 items-center justify-center gap-4 bg-blue-600 border text-white rounded-full font-medium">
          <span className="text-lg">Zaloguj</span> <UnlockKeyhole />
        </button>
        <div className="mt-10 flex items-center justify-center text-center">
          <p>
            Nie masz konta?{" "}
            <button className="underline">Zarejestruj się</button>
          </p>
        </div>
      </div>
    </form>
  );
};

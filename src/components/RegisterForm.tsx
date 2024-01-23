import { UnlockKeyhole } from "lucide-react";
import React from "react";

export const LoginForm = () => {
	return (
		<form className="mt-5">
			<div>
				<label
					htmlFor="email"
					className="mb-2 block text-xl font-medium text-gray-900 dark:text-white"
				>
					Twój email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="name@company.com"
				/>
				<label
					htmlFor="password"
					className="my-2 block text-xl font-medium text-gray-900 dark:text-white"
				>
					Hasło
				</label>
				<input
					type="password"
					name="password"
					id="password"
					className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="name@company.com"
				/>
				<button className="mt-10 flex w-full items-center justify-center gap-4 rounded-full border bg-blue-600 px-6 py-2.5 font-medium text-white">
					<span className="text-lg">Zarejestruj</span> <UnlockKeyhole />
				</button>
				<div className="mt-10 flex items-center justify-center text-center">
					<p>
						Masz konta? <button className="underline">Zaloguj się</button>
					</p>
				</div>
			</div>
		</form>
	);
};

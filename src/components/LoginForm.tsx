import axios from "axios";
import { loginUser } from "@/app/actions";
import { SubmitButton } from "./SubmitButton";
import { SignInForm } from "@/api/forms";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
	const { push } = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const payload = {
			username: event.currentTarget.username.value,
			password: event.currentTarget.password.value,
		};

		// await axios.post("/api/auth/login", payload);
		// push("/dashboard");

		try {
			await axios.post("/api/auth/login", payload);
			// await axios.get("/api/auth/user");

			alert("pomyślnie zalogowano");
			// redirect the user to /dashboard
			push("/dashboard");
		} catch (e) {
			alert("błąd");
		}
	};

	return (
		<form onSubmit={handleSubmit} action={loginUser} method="POST" className="mt-5">
			<div>
				<label
					htmlFor="username"
					className="mb-2 block text-xl font-medium text-gray-900 dark:text-white"
				>
					Nazwa użytkownika
				</label>
				<input
					type="text"
					name="username"
					id="username"
					className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="Username"
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
					placeholder="*********"
				/>
				<SubmitButton />
			</div>
		</form>
	);
};

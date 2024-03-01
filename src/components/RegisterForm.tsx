import { UnlockKeyhole } from "lucide-react";
import { createAccount } from "@/app/actions";

const labels = [
	{ name: "Nazwa użytkownika", type: "text", id: "username", placeholder: "John123" },
	{ name: "Twój email", type: "email", id: "email", placeholder: "john@gmail.com" },
	{ name: "Imię", type: "text", id: "firstName", placeholder: "John" },
	{ name: "Nazwisko", type: "text", id: "lastName", placeholder: "Doe" },
	{ name: "Hasło", type: "password", id: "password", placeholder: "********" },
];

export const RegisterForm = () => {
	return (
		<form action={createAccount} method="POST" className="mt-5 ">
			<div className="flex flex-col gap-4">
				{labels.map((label) => (
					<div key={label.name}>
						<label htmlFor={label.id} className="mb-2 block text-xl font-medium text-gray-900 ">
							{label.name}
						</label>
						<input
							type={label.type}
							name={label.id}
							id={label.id}
							className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm  "
							placeholder={label.placeholder}
						/>
					</div>
				))}

				<button className="mt-10 flex w-full items-center justify-center gap-4 rounded-full border bg-blue-600 px-6 py-2.5 font-medium text-white">
					<span className="text-lg">Zarejestruj się</span> <UnlockKeyhole />
				</button>
			</div>
		</form>
	);
};

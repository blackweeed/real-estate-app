import { cookies } from "next/headers";

export const LogoutButton = () => {
	async function logout() {
		"use server";
		cookies().delete("OurSiteJWT");
		console.log("wylogowano");
	}

	return (
		<form action={logout}>
			<button className="ml-10 rounded-full border px-4 py-2">WYLOGUJ</button>
		</form>
	);
};

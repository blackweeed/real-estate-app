import React from "react";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/api/user";
import { LogoutButton } from "@/components/LogoutButton";

export default async function Dashboard() {
	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;

	console.log("OURJWT", token);
	if (token) {
		const user = await getCurrentUser(token);
		return (
			<div className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-gray-50">
				<h1>Panel użytkownika </h1>
				<p>Email {user?.email}</p>
				<p>Imię {user?.firstName}</p>
				<p>Nazwisko {user?.lastName}</p>
				<LogoutButton />
			</div>
		);
	}

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-gray-50">
			BRAK DOSTĘPU
		</div>
	);
}

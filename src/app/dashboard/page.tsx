import React from "react";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/api/user";
import { LogoutButton } from "@/components/LogoutButton";
import { Mail, Pencil, Phone } from "lucide-react";
import { Propertie } from "@/components/Propertie";
import { getPropertiesList } from "@/api/properties";

export default async function Dashboard() {
	const properties = await getPropertiesList();
	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;

	console.log("OURJWT", token);
	if (token) {
		const user = await getCurrentUser(token);
		return (
			<div className="mt-[5.625rem] flex h-screen w-full flex-col lg:flex-row">
				<div className="h-full w-full bg-gray-100 lg:w-[35%]">
					<div className="mx-auto mt-10 h-fit w-[90%] rounded-md bg-white p-6">
						<div className="h-14 w-14 rounded-full bg-gray-200"></div>
						<h2 className="mt-2 text-lg font-semibold">
							{user?.firstName} {user?.lastName}
						</h2>
						<div className="mt-2">
							<p className="flex items-center gap-2 text-sm font-medium">
								<Phone size={20} />
								997
							</p>
							<p className="mb-3 mt-2 flex items-center gap-2 text-sm font-medium">
								<Mail size={20} />
								{user?.email}
							</p>
						</div>
						<button className="mt-4 flex gap-2 rounded-full border px-4 py-2 text-center font-semibold">
							<Pencil /> Edytuj profil
						</button>
					</div>
				</div>
				<div className="h-full w-full overflow-y-scroll bg-white p-10 lg:w-[65%]">
					<h2 className="mb-4 text-2xl font-semibold text-blue-600 lg:text-3xl">Ulubione</h2>
					<div className="mb-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
						{properties?.slice(0, 4).map((slug) => {
							return <Propertie key={slug.slug} slug={slug.slug} />;
						})}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-gray-50">
			BRAK DOSTĘPU
		</div>
	);
}

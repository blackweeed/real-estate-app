"use client";
import { User, X } from "lucide-react";
import { useState } from "react";
import { UserLoginMenu } from "./UserLoginMenu";

export const ToggleAgentMenuButton = () => {
	const [toogleUserMenu, setToggleUserMenu] = useState(false);

	return (
		<>
			<button
				onClick={() => setToggleUserMenu(true)}
				className="hidden rounded-full border-2 p-2 lg:block"
			>
				<User size={20} />
			</button>
			{toogleUserMenu && <UserLoginMenu setToggleUserMenu={setToggleUserMenu} />}
		</>
	);
};

"use client";

import { useState } from "react";
import { UserLoginMenu } from "./UserLoginMenu";

export const Button = ({ text, className }: { text: string; className: string }) => {
	const [toogleUserMenu, setToggleUserMenu] = useState(false);

	return (
		<>
			<div onClick={() => setToggleUserMenu(true)} className={`${className}`}>
				{text}
			</div>
			{toogleUserMenu && <UserLoginMenu setToggleUserMenu={setToggleUserMenu} />}
		</>
	);
};

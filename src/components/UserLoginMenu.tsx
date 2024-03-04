import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { disableScroll, enableScroll } from "@/app/utils";

type UserLoginMenuProps = {
	setToggleUserMenu: (toggle: boolean) => void;
};

export const UserLoginMenu = ({ setToggleUserMenu }: UserLoginMenuProps) => {
	const [toggle, setToggle] = useState("login");
	useEffect(() => {
		disableScroll();

		return () => enableScroll();
	}, []);

	return (
		<AnimatePresence>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: "100vh" }}
				exit={{ height: 0 }}
				transition={{ duration: 0.3 }}
				className="fixed left-0 right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-blue-600 bg-transparent/40"
			>
				<div className="z-50 h-[80%] w-[36%]  overflow-y-scroll rounded-3xl bg-white px-14 py-10">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-semibold text-blue-600">
							{toggle === "register" ? "Rejestracja" : "Logowanie"}
						</h3>
						<button
							onClick={() => setToggleUserMenu(false)}
							className="flex items-center justify-center rounded-full border-[1.7px] p-2.5"
						>
							<X />
						</button>
					</div>
					{toggle === "register" ? <RegisterForm /> : <LoginForm />}
					<div className="mt-10 flex items-center justify-center text-center ">
						{toggle === "register" ? (
							<p>
								Masz konto?{" "}
								<button onClick={() => setToggle("login")} className="underline">
									Zaloguj się
								</button>
							</p>
						) : (
							<p>
								Nie masz konta?{" "}
								<button onClick={() => setToggle("register")} className="underline">
									Zarejestruj się
								</button>
							</p>
						)}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

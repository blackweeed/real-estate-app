import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LoginForm } from "./LoginForm";

type UserLoginMenuProps = {
	setToggleUserMenu: (toggle: boolean) => void;
};

export const UserLoginMenu = ({ setToggleUserMenu }: UserLoginMenuProps) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: "100vh" }}
				exit={{ height: 0 }}
				transition={{ duration: 0.3 }}
				className="fixed left-0 right-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-blue-600 bg-transparent/40"
			>
				<div className="z-50 h-[80%] w-[36%] overflow-hidden rounded-3xl bg-white px-14 py-10">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-semibold text-blue-600">Zaloguj się</h3>
						<button
							onClick={() => setToggleUserMenu(false)}
							className="flex items-center justify-center rounded-full border-[1.7px] p-2.5"
						>
							<X />
						</button>
					</div>
					<LoginForm />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

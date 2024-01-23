"use client";

import { motion, AnimatePresence } from "framer-motion";

import { AlignRight } from "lucide-react";
import { useState } from "react";
import { Menu } from "./Menu";

export const ToggleMenuButton = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<button
				onClick={() => setToggle(true)}
				className="inline-flex items-center justify-between gap-2  rounded-full border-2 bg-white px-2 py-2 lg:px-4 "
			>
				<p className="hidden lg:block">Menu</p>
				<AlignRight size={20} strokeWidth={2.4} />
			</button>
			{toggle && (
				<AnimatePresence>
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "100vh" }}
						exit={{ height: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-blue-600 bg-transparent/40"
					>
						<Menu setToggle={setToggle} />
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
};

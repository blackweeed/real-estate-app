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
        className="w-full h-screen top-0 left-0 right-0 fixed z-40 flex justify-center items-center bg-blue-600 bg-transparent/40"
      >
        <div className="w-[36%] h-[80%] py-10 px-14 bg-white rounded-3xl z-50 overflow-hidden">
          <div className="flex justify-between items-center">
            <h3 className="text-blue-600 font-semibold text-2xl">
              Zaloguj się
            </h3>
            <button
              onClick={() => setToggleUserMenu(false)}
              className="p-2.5 flex items-center justify-center border-[1.7px] rounded-full"
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

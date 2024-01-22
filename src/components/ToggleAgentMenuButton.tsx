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
        className="hidden lg:block p-2 border-2 rounded-full"
      >
        <User size={20} />
      </button>
      {toogleUserMenu && (
        <UserLoginMenu setToggleUserMenu={setToggleUserMenu} />
      )}
    </>
  );
};

import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "../profile/icon/arrowDownIcon";
import { UiButton } from "../uikit";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className={`w-44`} size={`lg`} variant={`primary`}>
        Играть
      </UiButton>

      <button className="ml-auto flex items-center gap-2 hover:text-teal-500 transition-colors">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}

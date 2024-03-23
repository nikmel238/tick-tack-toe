import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrowLeftIcon";
import { StarIcon } from "./icons/starIcon";
import { UserIcon } from "./icons/userIcon";
import { HistoryIcon } from "./icons/historyIcon";

export function GameTitle() {
  return (
    <div className={`pl-2`}>
      <Link
        href={`#`}
        className={`flex items-center gap-2 text-xs text-teal-600 -mb-0.5`}
      >
        <ArrowLeftIcon /> На главную
      </Link>
      <h1 className={`text-4xl leading-tight `}>Крестики нолики</h1>
      <div
        className={`flex flex-row gap-3 items-center  text-xs text-slate-400`}
      >
        <StarIcon />
        <div className={`flex gap-1 items-center`}>
          <UserIcon /> 2
        </div>
        <div className={`flex gap-1 items-center`}>
          <HistoryIcon />
          {`1`} мин на ход
        </div>
      </div>
    </div>
  );
}

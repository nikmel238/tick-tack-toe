import { ZeroGameIcon } from "./icons/zeroGameIcon";
import { CrossGameIcon } from "./icons/crossGameIcon";
import { UiButton } from "../uikit";
import clsx from "clsx";

const cells = new Array(19 * 19).fill(null);
export function GameField({ className }) {
  return (
    <div
      className={clsx(`px-8 py-5 bg-white shadow-md rounded-2xl`, className)}
    >
      <div className={`flex items-center`}>
        <div>
          <div className={`flex items-center gap-1 text-xl font-semibold`}>
            Ход: <ZeroGameIcon className={`w-5 h-5`} />
          </div>
          <div className={`flex items-center gap-1 text-xs text-slate-400   `}>
            Следующий: <CrossGameIcon />
          </div>
        </div>

        <div className={`ml-auto flex gap-3`}>
          <UiButton className={``} size={"md"} variant={"primary"}>
            Ничья
          </UiButton>
          <UiButton className={``} size={"md"} variant={"outline"}>
            Сдаться
          </UiButton>
        </div>
      </div>
      <div
        className={`mt-3 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] `}
      >
        {cells.map((_, index) => {
          return (
            <button
              key={index}
              className={`border border-slate-200 -mt-px -ml-px flex justify-center items-center`}
            >
              {<CrossGameIcon className={`w-5 h-5`} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

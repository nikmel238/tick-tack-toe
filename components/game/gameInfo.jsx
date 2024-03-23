import { CrossGameIcon } from "./icons/crossGameIcon";
import { Profile } from "../profile";
import { ZeroGameIcon } from "./icons/zeroGameIcon";
import clsx from "clsx";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        `px-8 py-4 bg-white shadow-md rounded-2xl flex gap-3 items-center justify-between`,
        className
      )}
    >
      <div className={`flex gap-3 items-center justify-center`}>
        <div className={`relative`}>
          <div
            className={`absolute -left-1 -top-1  w-5 h-5 rounded-full bg-white flex justify-center items-center`}
          >
            <CrossGameIcon />
          </div>

          <Profile className={`w-44`} />
        </div>

        <div className={`h-6 w-px bg-slate-200 `}></div>
        <div className={`text-lg font-semibold text-slate-900`}>01:08</div>
      </div>

      <div className={`flex gap-3 items-center justify-center`}>
        <div className={`text-lg font-semibold text-orange-600`}>00:08</div>
        <div className={`h-6 w-px bg-slate-200 `}></div>
        <div className={`relative`}>
          <div
            className={`absolute -left-1 -top-1  w-5 h-5 rounded-full bg-white flex justify-center items-center`}
          >
            <ZeroGameIcon />
          </div>
          <Profile className={`w-44`} />
        </div>
      </div>
    </div>
  );
}

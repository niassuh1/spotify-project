"use client";

import { useAppSelector } from "@/redux/hooks";
import { FC, PropsWithChildren } from "react";

export const SideNavWrapper: FC<PropsWithChildren> = ({ children }) => {
  const isOpen = useAppSelector((state) => state.nav.isOpen);
  return (
    <div
      data-isopen={isOpen}
      className="data-[isopen='true']:ml-[65px] md:!ml-0 data-[isopen='false']:ml-0 transition-all  ease-in-out md:transition-none w-full"
    >
      {children}
    </div>
  );
};

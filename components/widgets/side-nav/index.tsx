"use client";
import { FC } from "react";
import { Button } from "../../common/ui/button";
import { RiHome2Fill, RiSearch2Fill, RiBook3Line } from "react-icons/ri";
import { useAppSelector } from "@/redux/hooks";
import { Logo } from "@/components/common/logo";
import { Separator } from "@/components/common/ui/separator";

export const SideNav: FC = () => {
  const isOpen = useAppSelector((state) => state.nav.isOpen);

  return (
    <aside
      data-isopen={isOpen}
      className="bg-background border-r border-r-white/10 fixed h-screen md:relative transition-all ease-in-out md:transition-none md:!translate-x-0  data-[isopen='true']:translate-x-0 data-[isopen='false']:-translate-x-full z-[9999]"
    >
      <nav className="flex flex-col items-center gap-4 p-3 ">
        <Logo className="text-4xl text-primary" />
        <Button className="aspect-square w-10 h-10 p-3" variant="ghost">
          <RiHome2Fill />
        </Button>
        <Button className="aspect-square  w-10 h-10 p-3" variant="ghost">
          <RiSearch2Fill />
        </Button>
      </nav>
      <Separator orientation="horizontal" />
      <nav className="flex flex-col items-center gap-4 p-3 ">
        <Button className="aspect-square w-10 h-10 p-3" variant="ghost">
          <RiBook3Line />
        </Button>
      </nav>
    </aside>
  );
};

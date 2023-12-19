"use client";
import { FC } from "react";
import { RiMenu2Fill, RiLogoutBoxLine } from "react-icons/ri";
import { Button } from "../common/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { toggleNav } from "@/redux/features/nav-slice";
import { Avatar, AvatarFallback } from "../common/ui/avatar";
import { Menubar, MenubarMenu, MenubarTrigger } from "../common/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../common/ui/dropdown-menu";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="bg-background/80 border-b backdrop-blur-2xl sticky top-0 w-full z-50">
      <nav className="p-3 flex items-center gap-3">
        <Button
          variant="outline"
          className="aspect-square text-lg p-3 md:hidden"
          onClick={() => dispatch(toggleNav())}
        >
          <RiMenu2Fill />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto">
            <Avatar>
              <AvatarFallback className="text-xs">HU</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Private Session</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-3 items-center">
              <RiLogoutBoxLine />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

"use client";
import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

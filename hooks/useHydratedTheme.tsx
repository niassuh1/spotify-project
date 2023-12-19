import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export const useHydratedTheme = () => {
  const theme = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<
    UseThemeProps | undefined
  >();
  useEffect(() => {
    setResolvedTheme(theme);
  }, [theme]);

  return resolvedTheme;
};

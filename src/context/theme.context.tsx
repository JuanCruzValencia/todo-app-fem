import { createContext, useState } from "react";
import { IThemeContextProps, THEME } from "../interfaces/interface";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as IThemeContextProps);

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT);

  const handleThemeColor = () => {
    setTheme((prevState) => {
      if (prevState === THEME.LIGHT) {
        return THEME.DARK;
      } else {
        return THEME.LIGHT;
      }
    });
  };

  const data = { theme, handleThemeColor };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

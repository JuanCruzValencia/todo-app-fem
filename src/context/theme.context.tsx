import { createContext, useState } from "react";
import { IThemeContextProps } from "../interfaces/interface";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as IThemeContextProps);

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleThemeColor = () => {
    setTheme((prevState) => !prevState);
  };

  const data = { theme, handleThemeColor };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContext } from "../contexts/context";

const HeaderProvider = ({ children }) => {
  const [header, setHeader] = useState("");

  const url = useLocation().pathname;

  const changeHeader = () => {
    switch (url) {
      case "/registration":
        setHeader("Зарегистрироваться в системе");
        break;

      case "/authorization":
        setHeader("Войти в систему");
        break;

      case "/main":
        setHeader("Приемы");
        break;

      default:
        setHeader("");
    }
  };

  useEffect(() => {
    changeHeader();
  }, [url]);

  const headerPage = {
    header,
  };

  return (
    <HeaderContext.Provider value={headerPage}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
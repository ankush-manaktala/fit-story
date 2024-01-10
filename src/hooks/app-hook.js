import { useEffect, useState } from "react";
import { getWelcomeAction } from "../store/welcome/action";
import { useReduxApi } from "./reduxApi-hook";
import { useSelector } from "react-redux";

export const useApp = () => {
  const headerData = useSelector((state) => state.welcome?.header);
  const { dispatchApi } = useReduxApi();
  const [header, setHeader] = useState([]);

  const getWelcomeData = async () => {
    await dispatchApi(getWelcomeAction);
  };

  useEffect(() => {
    if (headerData) {
      setHeader(headerData);
    }
  }, [setHeader, headerData]);
  
  return {
    header,
    getWelcomeData,
  };
};

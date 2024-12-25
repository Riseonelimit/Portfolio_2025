import { useContext } from "react";
import { AppContext } from "../providers/AppContextProvider";

export const useAppContext = () => {
    return useContext(AppContext);
};

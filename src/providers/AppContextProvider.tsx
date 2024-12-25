import { createContext, ReactNode, useState } from "react";

type AppContextType = {
    techArray: Array<string>;
    setTechArray: (techArray: Array<string>) => void;
    isProjectHovered: boolean;
    setIsProjectHovered: (isProjectHovered: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
    techArray: [],
    setTechArray: () => {},
    isProjectHovered: false,
    setIsProjectHovered: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [techArray, setTechArray] = useState<Array<string>>([]);

    const [isProjectHovered, setIsProjectHovered] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                techArray,
                setTechArray,
                isProjectHovered,
                setIsProjectHovered,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

import { createContext, ReactNode, useState } from "react";

type AppContextType = {
    techArray: Array<string>;
    setTechArray: (techArray: Array<string>) => void;
    isProjectHovered: boolean;
    setIsProjectHovered: (isProjectHovered: boolean) => void;
    isRecruiterMode: boolean;
    setIsRecruiterMode: (isRecruiterMode: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
    techArray: [],
    setTechArray: () => {},
    isProjectHovered: false,
    setIsProjectHovered: () => {},
    isRecruiterMode: false,
    setIsRecruiterMode: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [techArray, setTechArray] = useState<Array<string>>([]);

    const [isProjectHovered, setIsProjectHovered] = useState<boolean>(false);

    const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                techArray,
                setTechArray,
                isProjectHovered,
                setIsProjectHovered,
                isRecruiterMode,
                setIsRecruiterMode,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

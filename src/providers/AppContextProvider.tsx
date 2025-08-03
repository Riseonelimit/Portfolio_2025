import { createContext, ReactNode, useState } from "react";

type AppContextType = {
    techArray: Array<string>;
    setTechArray: (techArray: Array<string>) => void;
    isProjectHovered: boolean;
    setIsProjectHovered: (isProjectHovered: boolean) => void;
    isRecruiterMode: boolean;
    setIsRecruiterMode: (isRecruiterMode: boolean) => void;
    isDeveloperConsoleOpen: boolean;
    setIsDeveloperConsoleOpen: (isDeveloperConsoleOpen: boolean) => void;
    isStatusActivityOpen: boolean;
    setIsStatusActivityOpen: (isStatusActivityOpen: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
    techArray: [],
    setTechArray: () => {},
    isProjectHovered: false,
    setIsProjectHovered: () => {},
    isRecruiterMode: false,
    setIsRecruiterMode: () => {},
    isDeveloperConsoleOpen: false,
    setIsDeveloperConsoleOpen: () => {},
    isStatusActivityOpen: false,
    setIsStatusActivityOpen: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [techArray, setTechArray] = useState<Array<string>>([]);

    const [isProjectHovered, setIsProjectHovered] = useState<boolean>(false);

    const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);

    const [isDeveloperConsoleOpen, setIsDeveloperConsoleOpen] =
        useState<boolean>(false);

    const [isStatusActivityOpen, setIsStatusActivityOpen] =
        useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                techArray,
                setTechArray,
                isProjectHovered,
                setIsProjectHovered,
                isRecruiterMode,
                setIsRecruiterMode,
                isDeveloperConsoleOpen,
                setIsDeveloperConsoleOpen,
                isStatusActivityOpen,
                setIsStatusActivityOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import BackgroundBlur from "./components/svg/BackgroundBlur";
import DeveloperConsole from "./components/DeveloperConsole";
import StatusActivity from "./components/StatusActivity";
import { useAppContext } from "./hooks/useAppContext";
import { useSecretSequence } from "./hooks/useSecretSequence";

function App() {
    const {
        isRecruiterMode,
        isDeveloperConsoleOpen,
        setIsDeveloperConsoleOpen,
        isStatusActivityOpen,
        setIsStatusActivityOpen,
    } = useAppContext();

    // Secret sequence hook for "dev" easter egg
    useSecretSequence({
        sequence: "dev",
        timeout: 30000, // Keep console open for 30 seconds
        onActivate: () => setIsDeveloperConsoleOpen(true),
        onDeactivate: () => setIsDeveloperConsoleOpen(false),
    });

    // Secret sequence hook for "status" easter egg
    useSecretSequence({
        sequence: "status",
        timeout: 15000, // Keep status open for 15 seconds
        onActivate: () => setIsStatusActivityOpen(true),
        onDeactivate: () => setIsStatusActivityOpen(false),
    });

    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);

    return (
        <section
            className={`bg-[#121212] text-white w-full flex flex-col justify-start items-center antialiased ${
                isRecruiterMode ? "min-h-screen" : ""
            }`}
        >
            <Hero />
            {!isRecruiterMode && (
                <>
                    <div
                        className="absolute z-0 top-0 w-full "
                        data-aos="fade-in"
                        data-aos-duration="1000"
                    >
                        <BackgroundBlur />
                    </div>
                    <h1 className=" px-2 my-10">Thanks for visiting!😁</h1>
                </>
            )}
            {isRecruiterMode && (
                <div className="px-2 my-10 text-center">
                    <p className="text-gray-400 text-sm">
                        Contact: anandrise2048@gmail.com |
                        <a
                            href="https://www.linkedin.com/in/anand-sarolkar-1298b0239/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline ml-1"
                        >
                            LinkedIn
                        </a>{" "}
                        |
                        <a
                            href="https://github.com/Riseonelimit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline ml-1"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            )}

            {/* Developer Console Easter Egg */}
            <DeveloperConsole
                isVisible={isDeveloperConsoleOpen}
                onClose={() => setIsDeveloperConsoleOpen(false)}
            />

            {/* Status Activity Easter Egg */}
            <StatusActivity
                isVisible={isStatusActivityOpen}
                onClose={() => setIsStatusActivityOpen(false)}
            />
        </section>
    );
}

export default App;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import BackgroundBlur from "./components/svg/BackgroundBlur";
import { useAppContext } from "./hooks/useAppContext";

function App() {
    const { isRecruiterMode } = useAppContext();

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
        </section>
    );
}

export default App;

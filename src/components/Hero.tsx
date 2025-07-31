import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import SpotifyStatus from "./SpotifyStatus";
import { useAppContext } from "../hooks/useAppContext";

const Main = () => {
    const { isRecruiterMode } = useAppContext();

    return (
        <div className=" w-[95%] lg:w-2/4 gap-5  rounded-r-2xl duration-300 p-4 flex flex-col  justify-center items-start relative  text-white mt-5 lg:mt-20 z-20  ">
            <div className=" w-full flex lg:flex-row flex-col items-start justify-between lg:items-center gap-5 mt-5">
                <div
                    className="  flex flex-col justify-center items-start z-20  "
                    data-aos="fade-up"
                >
                    <h1
                        className=" flex items-center justify-center text-4xl  font-bold  bg-clip-text text-transparent bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 
                    
                    relative after:absolute after:bg-orange-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                    >
                        {/* <PajamasAt className=" w-10 text-3xl text-orange-800/30 " />{" "} */}
                        Anand Sarolkar
                    </h1>
                    <Socials />
                </div>

                {!isRecruiterMode && <SpotifyStatus />}
            </div>

            <About />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
};

export default Main;

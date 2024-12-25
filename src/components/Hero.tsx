import luffy from "../assets/luffy.gif";
import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";

const Main = () => {
    return (
        <div className=" w-2/4  gap-5  rounded-r-2xl duration-300 p-4 flex flex-col  justify-center items-start relative  text-white mt-20  ">
            <div
                className=" w-full flex flex-col justify-center items-start z-20  "
                data-aos="fade-up"
            >
                <h1
                    className=" flex items-center justify-center text-4xl font-bold  bg-clip-text text-transparent bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 
                
                relative after:absolute after:bg-orange-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                    {/* <PajamasAt className=" w-10 text-3xl text-orange-800/30 " />{" "} */}
                    Anand Sarolkar
                </h1>
                <Socials />
            </div>
            <div className=" w-full flex flex-col justify-center items-start z-20 mt-10">
                <h1 className=" text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                    Hey,
                </h1>
                <p className=" leading-8">
                    I am mostly a self-taught full-stack developer currently in
                    my first year as an MSc Computer Applications student. My
                    skills include React, Node.js, Express, MongoDB, Supabase,
                    and Tailwind CSS, although not limited to it. I am currently
                    exploring Spring Boot, Docker, and Kubernetes. <br />
                    <br /> In my free time, I enjoy playing games and listening
                    to music. Talk about{" "}
                    <span className=" font-semibold hover:text-green-400 duration-200">
                        nature🌿
                    </span>
                    ,{" "}
                    <span className=" font-semibold hover:text-yellow-400 duration-200">
                        anime
                    </span>{" "}
                    <span className=" text-white/30 group relative">
                        The OnePiece is Real.{" "}
                        <div className=" max-w-40 min-w-20  flex justify-center items-center mt-10 rounded-xl overflow-hidden absolute top-0 -right-[50%] group-hover:visible group-hover:opacity-100 duration-300 opacity-0 invisible">
                            <img
                                src={luffy}
                                alt="luffy"
                                className=" w-full h-full object-cover"
                            />
                        </div>
                    </span>
                </p>
            </div>
            <Skills />
            <Projects />
            {/* <h1 className=" text-[17rem] font-bold text-orange-400 self-center absolute opacity-10 tracking-wider ">
                2024
            </h1> */}
        </div>
    );
};

export default Main;

import { useAppContext } from "../hooks/useAppContext";
import LineMdExternalLink from "./svg/LineMdExternalLink";

const Projects = () => {
    const { setTechArray, setIsProjectHovered } = useAppContext();

    return (
        <div
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="  w-full border-orange-500  gap-5 rounded-r-2xl duration-300 flex flex-col  justify-center items-start relative  mt-4   text-orange-100 mt-4rem   transition-all"
        >
            <h1 className=" text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                Projects
            </h1>

            <div className=" w-full grid grid-cols-2 col-span-1 gap-3  ">
                <div
                    onMouseEnter={() => {
                        setTechArray([
                            "React",
                            "Node.js",
                            "Express",
                            "Socket.io",
                            "Supabase",
                            "Tailwind CSS",
                            "GitHub",
                            "PostgreSQL",
                        ]);
                        setIsProjectHovered(true);
                    }}
                    onMouseLeave={() => {
                        setTechArray([]);
                        setIsProjectHovered(false);
                    }}
                    className="w-full flex flex-col col-span-1 items-center justify-start p-5 gap-4 rounded-lg bg-orange-950/20 border-[1px] border-yellow-700"
                >
                    <div className=" w-full flex flex-col items-start justify-between gap-1">
                        <a className=" text-xl font-semibold">Chatopia</a>
                        <a
                            className=" text-sm text-slate-400 hover:underline flex items-center justify-center "
                            href="  https://github.com/Riseonelimit/Chatopia"
                        >
                            github.com/Riseonelimit/Chatopia
                            <LineMdExternalLink className=" text-lg" />
                        </a>
                    </div>
                    <p className=" text-sm  font-light ">
                        ChatApp with rooms and private messaging feature. Built
                        using React, Node.js, Express, and Socket.io.
                    </p>
                </div>

                <div
                    onMouseEnter={() => {
                        setTechArray([
                            "React",
                            "Node.js",
                            "Express",
                            "Socket.io",
                            "Supabase",
                            "Tailwind CSS",
                            "GitHub",
                        ]);
                        setIsProjectHovered(true);
                    }}
                    onMouseLeave={() => {
                        setTechArray([]);
                        setIsProjectHovered(false);
                    }}
                    className="w-full flex flex-col col-span-1 items-center justify-center p-5 gap-4 rounded-lg bg-orange-950/20 border-[1px] border-yellow-700"
                >
                    <div className=" w-full flex flex-col items-start justify-between gap-1">
                        <a className=" text-xl font-semibold">SparkCharge</a>
                        <a
                            className=" text-sm text-slate-400 hover:underline flex items-center justify-center "
                            href="  https://github.com/Riseonelimit/SparkCharge"
                            target="_blank"
                        >
                            github.com/Riseonelimit/SparkCharge{" "}
                            <LineMdExternalLink className=" text-lg" />
                        </a>
                    </div>
                    <p className=" text-sm  font-light ">
                        The SparkCharge Project is focused on developing and
                        improving electric vehicle charging infrastructure. It
                        involves creating solutions to enhance charging
                        networks, making them more efficient, accessible, and
                        sustainable for electric vehicle users
                    </p>
                </div>

                <div
                    onMouseEnter={() => {
                        setTechArray([
                            "React",
                            "Node.js",
                            "Express",
                            "Socket.io",
                            "Supabase",
                            "Tailwind CSS",
                            "GitHub",
                            "MySQL",
                        ]);
                        setIsProjectHovered(true);
                    }}
                    onMouseLeave={() => {
                        setTechArray([]);
                        setIsProjectHovered(false);
                    }}
                    className="w-full flex flex-col col-span-1 items-center justify-center p-5 gap-4 rounded-lg bg-orange-950/20 border-[1px] border-yellow-700"
                >
                    <div className=" w-full flex flex-col items-start justify-between gap-1">
                        <a className=" text-xl font-semibold">LifeChronicle</a>
                        <a
                            className=" text-sm text-slate-400 hover:underline flex items-center justify-center "
                            href="https://github.com/Riseonelimit/LifeChronicle"
                            target="_blank"
                        >
                            github.com/Riseonelimit/LifeChronicle
                            <LineMdExternalLink className=" text-lg" />
                        </a>
                    </div>
                    <p className=" text-sm  font-light ">
                        Life Chronicle is a 100-day challenge where people write
                        about their daily lives, share thoughts with others.
                        It's about self-discovery through writing, photos, and
                        building a supportive community
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;

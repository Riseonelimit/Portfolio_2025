import { projectData } from "../data/projectData";
import { useAppContext } from "../hooks/useAppContext";
import LineMdExternalLink from "./svg/LineMdExternalLink";
import PajamasGithub from "./svg/PajamasGithub";

const Projects = () => {
    const { setTechArray, setIsProjectHovered } = useAppContext();

    return (
        <div
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="  w-full border-orange-500  gap-5 rounded-r-2xl duration-300 flex flex-col  justify-center items-start relative  mt-4   text-orange-100 mt-4rem   transition-all "
        >
            <h1 className=" text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                Main Projects
            </h1>

            <div className=" w-full grid lg:grid-cols-2 col-span-1 gap-3  ">
                {projectData.map((project) => {
                    return (
                        <div
                            onMouseEnter={() => {
                                setTechArray(project.techStack);
                                setIsProjectHovered(true);
                            }}
                            onMouseLeave={() => {
                                setTechArray([]);
                                setIsProjectHovered(false);
                            }}
                            className="w-full flex flex-col col-span-1 items-start justify-start p-5 gap-4 rounded-lg bg-orange-950/20 border-[1px] border-yellow-700 overflow-hidden  relative"
                        >
                            <div className=" w-full flex flex-col items-start justify-between gap-1">
                                <a className=" text-xl font-semibold">
                                    {project.name}
                                </a>
                                <a
                                    className=" text-sm text-slate-400 hover:underline flex items-center justify-center "
                                    href={project.githubLink}
                                >
                                    {project.linkPreview}
                                    <LineMdExternalLink className=" text-lg" />
                                </a>
                            </div>
                            <p className=" text-sm  font-light">
                                {project.description}
                            </p>
                        </div>
                    );
                })}
                <div className="w-full flex flex-col col-span-1 items-center justify-center p-5 gap-4 rounded-lg bg-black/30 border-[1px] border-white/40 overflow-hidden  relative">
                    <a
                        href="https://github.com/Riseonelimit?tab=repositories"
                        className=" p-2 rounded-xl bg-gradient-to-bl from-gray-400 via-slate-900 to-zinc-700"
                    >
                        <PajamasGithub className=" size-7 object-cover " />
                    </a>
                    <p className="  text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-gray-600 via-zinc-300 to-zinc-500  ">
                        More on GitHub
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;

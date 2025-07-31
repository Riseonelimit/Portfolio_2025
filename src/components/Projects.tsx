import { projectData } from "../data/projectData";
import { useAppContext } from "../hooks/useAppContext";
import LineMdExternalLink from "./svg/LineMdExternalLink";
import PajamasGithub from "./svg/PajamasGithub";

const Projects = () => {
    const { setTechArray, setIsProjectHovered, isRecruiterMode } =
        useAppContext();

    if (isRecruiterMode) {
        return (
            <div className="w-full gap-5 rounded-r-2xl duration-300 flex flex-col justify-center items-start relative mt-4 text-orange-100 transition-all">
                <h1 className="text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                    Key Projects
                </h1>

                <div className="w-full space-y-4">
                    {projectData.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col items-start justify-start p-4 gap-3 rounded-lg bg-gradient-to-br from-orange-950/30 to-yellow-950/20 border-[1px] border-orange-500/30"
                        >
                            <div className="w-full flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-orange-200">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                                        {project.description.length > 120
                                            ? `${project.description.substring(
                                                  0,
                                                  120
                                              )}...`
                                            : project.description}
                                    </p>
                                </div>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-3 p-1.5 bg-gray-800/50 border border-gray-600 rounded hover:bg-gray-700/50 transition-colors"
                                >
                                    <LineMdExternalLink className="text-sm text-gray-400" />
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {project.techStack.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 bg-orange-950/50 border border-orange-500/40 rounded text-xs text-orange-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.techStack.length > 5 && (
                                    <span className="px-2 py-0.5 bg-gray-950/50 border border-gray-500/40 rounded text-xs text-gray-400">
                                        +{project.techStack.length - 5} more
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-950/50 to-zinc-950/30 border-[1px] border-gray-500/30">
                        <a
                            href="https://github.com/Riseonelimit?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                        >
                            <PajamasGithub className="size-5 object-cover" />
                            <span className="text-sm font-medium">
                                View All Projects on GitHub
                            </span>
                            <LineMdExternalLink className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }

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

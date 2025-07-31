import Aos from "aos";
import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import Primary from "./technologies/Primary";
import Secondary from "./technologies/Secondary";

const Skills = () => {
    const { isProjectHovered, isRecruiterMode } = useAppContext();

    useEffect(() => {
        if (!isProjectHovered) {
            Aos.refreshHard();
        }
    }, [isProjectHovered]);

    if (isRecruiterMode) {
        return (
            <div className="w-full gap-2 rounded-r-2xl duration-300 mt-4 flex flex-col justify-center items-start relative text-orange-100 transition-all">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500 drop-shadow-xl">
                    Technical Skills
                </h1>
                <div className="w-full grid md:grid-cols-2 gap-4 mt-3">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-orange-300 text-sm">
                            Languages & Backend
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                "JavaScript",
                                "TypeScript",
                                "Java",
                                "Node.js",
                                "Express.js",
                                "Spring Boot",
                                "REST APIs",
                                "Socket.IO",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-orange-950/40 border border-orange-500/30 rounded text-xs text-orange-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-orange-300 text-sm">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                "React.js",
                                "Redux Toolkit",
                                "TanStack Query",
                                "Tailwind CSS",
                                "Clerk",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-blue-950/40 border border-blue-500/30 rounded text-xs text-blue-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-orange-300 text-sm">
                            Databases & ORMs
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                "PostgreSQL",
                                "MySQL",
                                "MongoDB",
                                "Redis",
                                "Prisma",
                                "Drizzle ORM",
                                "Supabase",
                                "Firebase",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-green-950/40 border border-green-500/30 rounded text-xs text-green-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-orange-300 text-sm">
                            Tools & DevOps
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                                "Git",
                                "Puppeteer",
                                "NodeMailer",
                                "RazorPay Integration",
                                "CI/CD",
                                "Docker",
                                "Agile",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-purple-950/40 border border-purple-500/30 rounded text-xs text-purple-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
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
            className="  w-full border-orange-200 gap-2 rounded-r-2xl duration-300 mt-4 flex flex-col  justify-center items-start relative text-orange-100 mt-4rem transition-all"
        >
            <h1 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500 drop-shadow-xl ">
                Skills
            </h1>

            <div className=" w-full border-1 border-red-500 flex flex-col items-start justify-center gap-3 mt-2 ">
                <Primary />
                <Secondary />
            </div>
        </div>
    );
};

export default Skills;

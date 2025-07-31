import luffy from "../assets/luffy.gif";
import { useAppContext } from "../hooks/useAppContext";

const About = () => {
    const { isRecruiterMode } = useAppContext();

    if (isRecruiterMode) {
        return (
            <div className="w-full flex flex-col justify-center items-start z-20 mt-10">
                <h1 className="text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                    Professional Summary
                </h1>
                <div className="leading-7 mt-2">
                    <p className="mb-4">
                        <span className="font-semibold text-orange-400">
                            Full-Stack Developer
                        </span>{" "}
                        |
                        <span className="font-semibold text-blue-400">
                            {" "}
                            MSc Computer Applications Student
                        </span>
                    </p>
                    <p className="mb-3">
                        Full-stack developer with experience in building
                        scalable web applications using React.js, Node.js, and
                        Spring Boot. Adept at integrating third-party APIs,
                        managing databases, and implementing authentication
                        systems. Strong focus on performance, maintainable code,
                        and delivering business-ready solutions across the
                        frontend and backend. Passionate about clean UI, DevOps,
                        and agile development.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className=" w-full flex flex-col justify-center items-start z-20 mt-10">
            <h1 className=" text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                Hey,
            </h1>
            <p className=" leading-8">
                I am mostly a self-taught full-stack developer currently in my
                first year as an MSc Computer Applications student. My skills
                include React, Node.js, Express, MongoDB, Supabase, and Tailwind
                CSS, although not limited to it. I am currently exploring Spring
                Boot, Docker, and Kubernetes. <br />
                <br /> In my free time, I enjoy playing games and listening to
                music. Talk about{" "}
                <span className=" font-semibold hover:text-green-400 duration-200">
                    nature🌿
                </span>
                ,{" "}
                <span className=" font-semibold hover:text-yellow-400 duration-200">
                    anime
                </span>{" "}
                <span className=" text-white/30 group relative">
                    The OnePiece is Real.{" "}
                    <div className=" max-w-40 min-w-20  flex justify-center items-center mt-10 rounded-xl overflow-hidden absolute top-0 left-0 lg:-right-[50%] group-hover:visible group-hover:opacity-100 duration-300 opacity-0 invisible">
                        <img
                            src={luffy}
                            alt="luffy"
                            className=" w-full h-full object-cover"
                        />
                    </div>
                </span>
            </p>
        </div>
    );
};

export default About;

import { useAppContext } from "../hooks/useAppContext";

// Experience data based on your resume
const experienceData = [
    {
        position: "Full-Stack Developer",
        company: "Freelance",
        duration: "Jul 2025 - Present",
        location: "Remote",
        description: [
            "Working as a freelance full-stack developer specializing in modern web applications",
            "Developing responsive and interactive frontend applications using React.js and modern JavaScript",
            "Building scalable backend solutions with Node.js and Express.js",
            "Implementing user authentication, database integration, and third-party API connections",
            "Delivering custom web solutions for clients with focus on performance and user experience",
            "Managing project timelines and client communications while ensuring high-quality deliverables",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "MongoDB",
            "PostgreSQL",
            "REST APIs",
            "Git",
        ],
    },
    {
        position: "Software Developer Intern",
        company: "Marva",
        duration: "Jan 2025 - Jul 2025",
        location: "India",
        description: [
            "Developed and deployed 3 production-grade websites including a Biology Classes Portal, AI Products Showcase, and App Showcase Site",
            "Configured cloud hosting using AWS CloudFront and Route 53 to ensure low-latency, high-availability deployments",
            "Implemented CI/CD pipelines via GitHub Actions, automating builds, tests, and deployments",
            "Containerized applications using Docker and experimented with AWS Fargate for scalable deployment",
            "Contributed and Led 'Sur App', an Indian classical music learning app, self-learned Flutter, and delivered features involving ragas, alankars, and instrument interactivity",
            "Led development teams for both mobile and web initiatives, improving delivery speed and code quality",
        ],
        technologies: [
            "React",
            "JavaScript",
            "Node.js",
            "AWS CloudFront",
            "Route 53",
            "GitHub Actions",
            "Docker",
            "AWS Fargate",
            "Flutter",
            "CI/CD",
        ],
    },
    {
        position: "FullStack Developer",
        company: "Suvidha Foundation",
        duration: "Oct 2023 - Nov 2023",
        location: "India",
        description: [
            "Rebuilt the foundation's website using React.js, improving performance and UI/UX",
            "Developed an automated offer letter system using Puppeteer (PDF generation) and NodeMailer (email delivery)",
            "Designed secure, customizable templates and improved HR workflow by automating repetitive tasks",
            "Completed two complex projects within tight deadlines and received a Letter of Recommendation",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "Node.js",
            "Express",
            "Puppeteer",
            "NodeMailer",
            "PDF Generation",
            "Email Automation",
        ],
    },
];

const Experience = () => {
    const { isRecruiterMode } = useAppContext();

    if (isRecruiterMode) {
        return (
            <div className="w-full gap-4 rounded-r-2xl duration-300 flex flex-col justify-center items-start relative mt-6 text-orange-100 transition-all">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500 drop-shadow-xl">
                    Professional Experience
                </h1>

                <div className="w-full space-y-5">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            className="w-full p-4 rounded-lg bg-gradient-to-br from-orange-950/30 to-yellow-950/20 border-[1px] border-orange-500/30"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-orange-200">
                                        {exp.position}
                                    </h3>
                                    <p className="text-orange-300 font-medium">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="text-right mt-1 md:mt-0">
                                    <p
                                        className={`text-sm font-medium ${
                                            exp.duration.includes("Present")
                                                ? "text-green-400"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        {exp.duration}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {exp.location}
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-1.5 mb-3">
                                {exp.description.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="text-sm text-gray-300 flex items-start"
                                    >
                                        <span className="text-orange-400 mr-2 mt-1.5 text-xs">
                                            •
                                        </span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 bg-blue-950/50 border border-blue-500/40 rounded text-xs text-blue-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="w-full gap-5 rounded-r-2xl duration-300 flex flex-col justify-center items-start relative mt-6 text-orange-100 transition-all"
        >
            <h1 className="text-xl font-bold text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-bl from-orange-500 via-yellow-200 to-orange-500">
                Experience
            </h1>

            <div className="w-full space-y-6">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col items-start justify-start p-5 gap-4 rounded-lg bg-orange-950/20 border-[1px] border-yellow-700 overflow-hidden relative hover:bg-orange-950/30 transition-all duration-300"
                    >
                        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-orange-200 mb-1">
                                    {exp.position}
                                </h3>
                                <p className="text-orange-300 font-medium text-lg">
                                    {exp.company}
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    {exp.location}
                                </p>
                            </div>
                            <div className="text-right">
                                <p
                                    className={`text-sm font-semibold px-3 py-1 rounded-full border ${
                                        exp.duration.includes("Present")
                                            ? "text-green-300 bg-green-900/30 border-green-600/50"
                                            : "text-yellow-300 bg-yellow-900/30 border-yellow-600/50"
                                    }`}
                                >
                                    {exp.duration}
                                </p>
                            </div>
                        </div>

                        <div className="w-full">
                            <ul className="space-y-2">
                                {exp.description.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        className="text-sm text-gray-300 flex items-start leading-relaxed"
                                    >
                                        <span className="text-orange-400 mr-3 mt-1.5 text-xs">
                                            •
                                        </span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full pt-3 border-t border-orange-500/20">
                            <p className="text-xs text-orange-300 mb-2 font-medium">
                                Technologies Used:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gradient-to-r from-orange-900/50 to-yellow-900/50 border border-orange-500/40 rounded-full text-xs text-orange-200 hover:border-orange-400 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

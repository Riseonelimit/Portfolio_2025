import CatppuccinPrisma from "../components/svg/CatppuccinPrisma";
import DeviconExpress from "../components/svg/DeviconExpress";
import DeviconFirebase from "../components/svg/DeviconFirebase";
import DeviconJava from "../components/svg/DeviconJava";
import DeviconJavascript from "../components/svg/DeviconJavascript";
import DeviconMongodb from "../components/svg/DeviconMongodb";
import DeviconMysql from "../components/svg/DeviconMysql";
import DeviconNextjs from "../components/svg/DeviconNextjs";
import DeviconPostgresql from "../components/svg/DeviconPostgresql";
import DeviconRedis from "../components/svg/DeviconRedis";
import DeviconRedux from "../components/svg/DeviconRedux";
import DeviconSupabase from "../components/svg/DeviconSupabase";
import DeviconTailwindcss from "../components/svg/DeviconTailwindcss";
import LogosDockerIcon from "../components/svg/LogosDockerIcon";
import LogosGoogleMaps from "../components/svg/LogosGoogleMaps";
import LogosSocketIo from "../components/svg/LogosSocketIo";
import LogosSpringIcon from "../components/svg/LogosSpringIcon";
import PajamasGithub from "../components/svg/PajamasGithub";
import SimpleIconsClerk from "../components/svg/SimpleIconsClerk";
import SimpleIconsRazorpay from "../components/svg/SimpleIconsRazorpay";
import SkillIconsAwsDark from "../components/svg/SkillIconsAwsDark";
import VscodeIconsFileTypeCss from "../components/svg/VscodeIconsFileTypeCss";
import VscodeIconsFileTypeHtml from "../components/svg/VscodeIconsFileTypeHtml";
import VscodeIconsFileTypeNode from "../components/svg/VscodeIconsFileTypeNode";
import VscodeIconsFileTypeReactjs from "../components/svg/VscodeIconsFileTypeReactjs";
import VscodeIconsFileTypeTypescriptOfficial from "../components/svg/VscodeIconsFileTypeTypescriptOfficial";

export const iconComponent = {
    VscodeIconsFileTypeReactjs,
    DeviconNextjs,
    DeviconRedux,
    DeviconExpress,
    VscodeIconsFileTypeNode,
    VscodeIconsFileTypeTypescriptOfficial,
    DeviconTailwindcss,
    DeviconRedis,
    DeviconMongodb,
    DeviconMysql,
    CatppuccinPrisma,
    DeviconSupabase,
    LogosDockerIcon,
    DeviconFirebase,
    LogosSocketIo,
    SimpleIconsRazorpay,
    SimpleIconsClerk,
    SkillIconsAwsDark,
    LogosSpringIcon,
    PajamasGithub,
    LogosGoogleMaps,
    VscodeIconsFileTypeHtml,
    VscodeIconsFileTypeCss,
    DeviconJavascript,
    DeviconJava,
    DeviconPostgresql,
};

type IconData = {
    name: string; // The name of the technology or tool, e.g., "ReactJS"
    icon: keyof typeof iconComponent; // The icon component name, e.g., "VscodeIconsFileTypeReactjs"
    shadowColor: string; // The shadow color class, e.g., "shadow-sky-400"
    borderColor: string; // The border color class, e.g., "border-sky-500"
    bgColor: string; // The background color class, e.g., "bg-sky-950"
    hoverTextColor: string; // The hover text color class, e.g., "group-hover:white"
    hoverBorderColor: string; // The hover border color class, e.g., "group-hover:border-sky-300"
    textColor?: string; // The text color class, e.g., "text-blue-600"
    techKey: string; // A unique tech key identifier, e.g., "React"
};

export const iconRenderData: IconData[] = [
    {
        name: "ReactJS",
        icon: "VscodeIconsFileTypeReactjs",
        shadowColor: "shadow-sky-400",
        borderColor: "border-sky-500",
        bgColor: "bg-sky-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-sky-300",
        textColor: "text-blue-600",
        techKey: "React",
    },
    {
        name: "NextJS",
        icon: "DeviconNextjs",
        shadowColor: "shadow-zinc-400",
        borderColor: "border-zinc-500",
        bgColor: "bg-zinc-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-zinc-300",
        techKey: "Next.js",
    },
    {
        name: "Redux Toolkit",
        icon: "DeviconRedux",
        shadowColor: "shadow-purple-400",
        borderColor: "border-purple-500",
        bgColor: "bg-purple-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-purple-300",
        techKey: "Redux Toolkit",
    },
    {
        name: "ExpressJS",
        icon: "DeviconExpress",
        shadowColor: "shadow-white/70",
        borderColor: "border-white/60",
        bgColor: "bg-white/10",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-white",
        textColor: "fill-white",
        techKey: "Express",
    },
    {
        name: "NodeJS",
        icon: "VscodeIconsFileTypeNode",
        shadowColor: "shadow-lime-400",
        borderColor: "border-lime-500",
        bgColor: "bg-lime-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-lime-300",
        techKey: "Node.js",
    },
    {
        name: "TypeScript",
        icon: "VscodeIconsFileTypeTypescriptOfficial",
        shadowColor: "shadow-blue-400",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-blue-300",
        techKey: "TypeScript",
    },
    {
        name: "Tailwind CSS",
        icon: "DeviconTailwindcss",
        shadowColor: "shadow-sky-400",
        borderColor: "border-sky-500",
        bgColor: "bg-sky-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-sky-300",
        techKey: "Tailwind CSS",
    },
    {
        name: "Redis",
        icon: "DeviconRedis",
        shadowColor: "shadow-rose-400",
        borderColor: "border-rose-500",
        bgColor: "bg-rose-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-rose-300",
        techKey: "Redis",
    },
    {
        name: "MongoDB",
        icon: "DeviconMongodb",
        shadowColor: "shadow-green-400",
        borderColor: "border-green-500",
        bgColor: "bg-green-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-green-300",
        techKey: "MongoDB",
    },
    {
        name: "MySQL",
        icon: "DeviconMysql",
        shadowColor: "shadow-blue-400",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-blue-300",
        techKey: "MySQL",
    },
    {
        name: "PrismaORM",
        icon: "CatppuccinPrisma",
        shadowColor: "shadow-emerald-300",
        borderColor: "border-emerald-300",
        bgColor: "bg-emerald-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-emerald-300",
        techKey: "PrismaORM",
    },
    {
        name: "Supabase",
        icon: "DeviconSupabase",
        shadowColor: "shadow-emerald-400",
        borderColor: "border-emerald-500",
        bgColor: "bg-emerald-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-emerald-300",
        techKey: "Supabase",
    },
    {
        name: "FireBase",
        icon: "DeviconFirebase",
        shadowColor: "shadow-yellow-500",
        borderColor: "border-yellow-400",
        bgColor: "bg-yellow-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-yellow-300",
        techKey: "FireBase",
    },
    {
        name: "Docker",
        icon: "LogosDockerIcon",
        shadowColor: "shadow-sky-400",
        borderColor: "border-sky-500",
        bgColor: "bg-sky-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-sky-300",
        techKey: "Docker",
    },
    {
        name: "GitHub",
        icon: "PajamasGithub",
        shadowColor: "shadow-white/70",
        borderColor: "border-white/60",
        bgColor: "bg-white/10",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-white",
        techKey: "GitHub",
    },
    {
        name: "Spring Boot",
        icon: "LogosSpringIcon",
        shadowColor: "shadow-lime-300",
        borderColor: "border-lime-300",
        bgColor: "bg-lime-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-lime-300",
        techKey: "SpringBoot",
    },
    {
        name: "GoogleMapsAPI",
        icon: "LogosGoogleMaps",
        shadowColor: "shadow-lime-300",
        borderColor: "border-lime-300",
        bgColor: "bg-lime-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-lime-300",
        techKey: "GoogleMapsApi",
    },
    {
        name: "Socket.io",
        icon: "LogosSocketIo",
        shadowColor: "shadow-white/70",
        borderColor: "border-white/60",
        bgColor: "bg-white/10",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-white",
        techKey: "Socket.io",
    },
    {
        name: "RazorPay",
        icon: "SimpleIconsRazorpay",
        shadowColor: "shadow-blue-400",
        borderColor: "border-blue-400",
        bgColor: "bg-blue-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-blue-400",
        textColor: "text-blue-600",
        techKey: "RazorPay",
    },
    {
        name: "Clerk",
        icon: "SimpleIconsClerk",
        shadowColor: "shadow-purple-500",
        borderColor: "border-purple-400",
        bgColor: "bg-purple-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-purple-300",
        textColor: "text-purple-600",
        techKey: "Clerk",
    },
    {
        name: "AWS",
        icon: "SkillIconsAwsDark",
        shadowColor: "shadow-yellow-500",
        borderColor: "border-yellow-400",
        bgColor: "bg-yellow-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-yellow-300",
        techKey: "AWS",
    },
];

export const secondaryIconRenderData: IconData[] = [
    {
        name: "HTML5",
        icon: "VscodeIconsFileTypeHtml",
        shadowColor: "shadow-orange-400",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-orange-300",
        textColor: "text-white",
        techKey: "HTML5",
    },
    {
        name: "CSS",
        icon: "VscodeIconsFileTypeCss",
        shadowColor: "shadow-purple-400",
        borderColor: "border-purple-500",
        bgColor: "bg-purple-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-purple-300",
        textColor: "text-white",
        techKey: "CSS3",
    },
    {
        name: "JavaScript",
        icon: "DeviconJavascript",
        shadowColor: "shadow-yellow-400",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-yellow-300",
        textColor: "text-white",
        techKey: "JavaScript",
    },
    {
        name: "Java",
        icon: "DeviconJava",
        shadowColor: "shadow-red-400",
        borderColor: "border-red-500",
        bgColor: "bg-red-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-red-300",
        textColor: "text-white",
        techKey: "Java",
    },
    {
        name: "PostgreSQL",
        icon: "DeviconPostgresql",
        shadowColor: "shadow-blue-400",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-950",
        hoverTextColor: "group-hover:white",
        hoverBorderColor: "group-hover:border-blue-300",
        textColor: "text-white",
        techKey: "PostgreSQL",
    },
];

import { useAppContext } from "../../hooks/useAppContext";
import CatppuccinPrisma from "../svg/CatppuccinPrisma";
import DeviconExpress from "../svg/DeviconExpress";
import DeviconMongodb from "../svg/DeviconMongodb";
import DeviconMysql from "../svg/DeviconMysql";
import DeviconNextjs from "../svg/DeviconNextjs";
import DeviconRedis from "../svg/DeviconRedis";
import DeviconRedux from "../svg/DeviconRedux";
import DeviconSupabase from "../svg/DeviconSupabase";
import DeviconTailwindcss from "../svg/DeviconTailwindcss";
import LogosDockerIcon from "../svg/LogosDockerIcon";
import PajamasGithub from "../svg/PajamasGithub";
import VscodeIconsFileTypeNode from "../svg/VscodeIconsFileTypeNode";
import VscodeIconsFileTypeReactjs from "../svg/VscodeIconsFileTypeReactjs";
import VscodeIconsFileTypeTypescriptOfficial from "../svg/VscodeIconsFileTypeTypescriptOfficial";

const Frontend = () => {
    const { techArray, isProjectHovered } = useAppContext();

    return (
        <div
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="600"
            className=" flex flex-col items-start justify-center col-span-1"
        >
            <h2 className=" text-yellow-100 font-medium text-[1rem]">GenZ</h2>
            <div
                className={` flex items-center  justify-start flex-wrap gap-3 p-4  border-x-[1px] border-yellow-700  rounded-lg relative  `}
            >
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-sky-400 border-sky-500 rounded-md p-2 duration-150  ${
                        isProjectHovered
                            ? techArray.includes("React")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <VscodeIconsFileTypeReactjs className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-sky-950 px-2 py-2 rounded-md border-[1px] border-sky-300 font-medium text-xs">
                        ReactJS
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-zinc-400 border-zinc-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Next.js")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconNextjs className=" w-full h-full  object-cover group-hover:white    text-white duration-500 " />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-zinc-950 px-2 py-2 rounded-md border-[1px] border-zinc-300 font-medium text-xs">
                        NextJS
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-purple-400 border-purple-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Redux")
                                ? " "
                                : "opacity-20"
                            : " "
                    }`}
                >
                    <DeviconRedux className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-purple-950 px-2 py-2 rounded-md border-[1px] border-purple-300 font-medium text-xs">
                        Redux
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-white/70 border-white/60 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Express")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconExpress className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-white/10 px-2 py-2 rounded-md border-[1px] border-white font-medium text-xs">
                        ExpressJS
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-lime-400 border-lime-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Node.js")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <VscodeIconsFileTypeNode className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-lime-950 px-2 py-2 rounded-md border-[1px] border-lime-300 font-medium text-xs">
                        NodeJS
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-blue-400 border-blue-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("TypeScript")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <VscodeIconsFileTypeTypescriptOfficial className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-blue-950 px-2 py-2 rounded-md border-[1px] border-blue-300 font-medium text-xs">
                        TypeScript
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-sky-400 border-sky-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Tailwind CSS")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconTailwindcss className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-sky-950 px-2 py-2 rounded-md border-[1px] border-sky-300 font-medium text-xs">
                        Tailwind CSS
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-rose-400 border-rose-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Redis")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconRedis className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-rose-950 px-2 py-2 rounded-md border-[1px] border-rose-300 font-medium text-xs">
                        Redis
                    </p>
                </div>

                <div
                    className={`text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-green-400 border-green-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Prisma")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconMongodb className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-green-950 px-2 py-2 rounded-md border-[1px] border-green-300 font-medium text-xs">
                        MongoDB
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-blue-400 border-blue-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("MySQL")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconMysql className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-blue-950 px-2 py-2 rounded-md border-[1px] border-blue-300 font-medium text-xs">
                        MySQL
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-emerald-300 border-emerald-300 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Prisma")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <CatppuccinPrisma className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-emerald-950 px-2 py-2 rounded-md border-[1px] border-emerald-300 font-medium text-xs">
                        PrismORM
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-emerald-400 border-emerald-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Supabase")
                                ? " "
                                : "opacity-20"
                            : " "
                    }`}
                >
                    <DeviconSupabase className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-emerald-950 px-2 py-2 rounded-md border-[1px] border-emerald-300 font-medium text-xs">
                        Supabase
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-sky-400 border-sky-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Docker")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <LogosDockerIcon className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-sky-950 px-2 py-2 rounded-md border-[1px] border-sky-300 font-medium text-xs">
                        Docker
                    </p>
                </div>

                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-white/70 border-white/60 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("GitHub")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <PajamasGithub className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-white/10 px-2 py-2 rounded-md border-[1px] border-white font-medium text-xs">
                        GitHub
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frontend;

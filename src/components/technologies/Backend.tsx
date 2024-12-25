import { useAppContext } from "../../hooks/useAppContext";
import DeviconJava from "../svg/DeviconJava";
import DeviconJavascript from "../svg/DeviconJavascript";
import DeviconPostgresql from "../svg/DeviconPostgresql";
import VscodeIconsFileTypeCss from "../svg/VscodeIconsFileTypeCss";
import VscodeIconsFileTypeHtml from "../svg/VscodeIconsFileTypeHtml";

const Backend = () => {
    const { techArray, isProjectHovered } = useAppContext();

    return (
        <div
            data-aos="flip-up"
            data-aos-delay="500"
            data-aos-duration="600"
            className=" flex flex-col items-start justify-center col-span-1"
        >
            <h2 className=" text-yellow-100 font-medium text-[1rem]">
                The Classics
            </h2>
            <div
                className={` flex items-center justify-start  gap-3 p-4 border-x-[1px] border-yellow-700  rounded-lg relative `}
            >
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-orange-400 border-orange-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("HTML5")
                                ? " "
                                : "opacity-20"
                            : " "
                    }`}
                >
                    <VscodeIconsFileTypeHtml className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-orange-950 px-2 py-2 rounded-md border-[1px] border-orange-300 font-medium text-xs">
                        HTML5
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-purple-400 border-purple-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("CSS3")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <VscodeIconsFileTypeCss className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-purple-950 px-2 py-2 rounded-md border-[1px] border-purple-300 font-medium text-xs">
                        CSS
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-yellow-400 border-yellow-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("JavaScript")
                                ? " "
                                : "opacity-20"
                            : " "
                    }`}
                >
                    <DeviconJavascript className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-yellow-950 px-2 py-2 rounded-md border-[1px] border-yellow-300 font-medium text-xs">
                        JavaScript
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-red-400 border-red-500 rounded-md p-2 duration-150 ${
                        isProjectHovered
                            ? techArray.includes("Java")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconJava className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-red-950 px-2 py-2 rounded-md border-[1px] border-red-300 font-medium text-xs">
                        Java
                    </p>
                </div>
                <div
                    className={` text-3xl relative hover:sky-rose-200 group border-x-[1.5px] shadow-md shadow-blue-400 border-blue-500 rounded-md p-2 duration-150  ${
                        isProjectHovered
                            ? techArray.includes("PostgreSQL")
                                ? " "
                                : "opacity-20"
                            : " "
                    } `}
                >
                    <DeviconPostgresql className=" w-full h-full  object-cover group-hover:white    text-white duration-500 fill-white" />
                    <p className=" absolute top-10 text-blue  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-blue-950 px-2 py-2 rounded-md border-[1px] border-blue-300 font-medium text-xs">
                        PostgresSQl
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Backend;

import { iconComponent, secondaryIconRenderData } from "../../data/iconData";
import { useAppContext } from "../../hooks/useAppContext";
import { cn } from "../../utils/twMergeConfig";

const Secondary = () => {
    const { techArray, isProjectHovered } = useAppContext();

    return (
        <div
            data-aos="flip-up"
            // data-aos-delay="500"
            data-aos-duration="600"
            className=" w-full flex flex-col items-start justify-center col-span-1"
        >
            <h2 className=" text-yellow-100 font-medium text-[1rem]">
                The Classics
            </h2>
            <div
                className={` w-full lg:w-full md:flex lg:grid items-center justify-start lg:justify-start flex-wrap grid grid-cols-6 lg:grid-cols-15 gap-3 p-4  border-x-[1px] border-yellow-700  rounded-lg relative  `}
            >
                {secondaryIconRenderData.map((icon) => {
                    const IconComponent = iconComponent[icon.icon];
                    return (
                        <div
                            key={icon.techKey}
                            className={cn(
                                "text-3xl relative group border-x-[1.5px] shadow-2xl rounded-md p-2 duration-150 flex items-center justify-center ",
                                // icon.bgColor,
                                icon.shadowColor,
                                icon.borderColor,
                                {
                                    "opacity-20":
                                        isProjectHovered &&
                                        !techArray.includes(icon.techKey),
                                }
                            )}
                        >
                            <IconComponent
                                className={cn(
                                    " overflow-hidden object-cover text-white duration-500 backdrop-blur-lg",
                                    icon.textColor,
                                    icon.name === "GoogleMapsAPI"
                                        ? "size-7"
                                        : "w-full h-full"
                                )}
                            />
                            <p
                                className={cn(
                                    " absolute top-10 text-red  group-hover:visible group-hover:opacity-100  opacity-0 invisible px-2 py-2 rounded-md border-[1px] font-medium text-xs z-20",
                                    icon.bgColor,
                                    icon.hoverTextColor,
                                    icon.borderColor
                                )}
                            >
                                {icon.techKey}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Secondary;

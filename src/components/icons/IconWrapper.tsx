import React from "react";
import clsx from "clsx";
type IconWrapperProps = {
    IconComponent: React.ElementType;
    text: string;
    colorScheme: string;
    className?: string;
};

const IconWrapper = ({
    IconComponent,
    text,
    colorScheme,
    className = "",
}: IconWrapperProps) => {
    return (
        <div
            className={clsx(
                "text-3xl relative group border-x-[1.5px] shadow-md rounded-md p-2 duration-150 ",
                `shadow-${colorScheme}-700`,
                `border-${colorScheme}-200/30`,
                className
            )}
        >
            <IconComponent
                className={
                    " w-full h-full object-cover group-hover:text-rose-200 text-rose-200/30 duration-500"
                }
            />

            <p
                className={` absolute top-10  group-hover:visible group-hover:opacity-100  opacity-0 invisible  bg-${colorScheme}-950 px-2 py-2 rounded-md border-[1px] border-${colorScheme}-400 font-medium text-xs`}
            >
                {text}
            </p>
        </div>
    );
};

export default IconWrapper;

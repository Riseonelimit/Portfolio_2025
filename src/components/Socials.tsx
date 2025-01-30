import LineMdEmailFilled from "./svg/LineMdEmailFilled";
import PajamasGithub from "./svg/PajamasGithub";
import RiLinkedinFill from "./svg/RiLinkedinFill";

import resume from "/Resume.pdf";

const Socials = () => {
    return (
        <div className="  flex justify-center items-center gap-2 ">
            <a
                href="https://github.com/Riseonelimit"
                target="_blank"
                className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 "
            >
                <PajamasGithub className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    Github
                </p>
            </a>
            <a
                href="https://www.linkedin.com/in/anand-sarolkar-1298b0239/"
                target="_blank"
                className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 "
            >
                <RiLinkedinFill className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    LinkedIn
                </p>
            </a>
            <a
                href="mailto:anandrise2048@gmail.com"
                className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 "
            >
                <LineMdEmailFilled className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    Email
                </p>
            </a>
            <a
                className=" px-3 py-2 border-[1px] border-rose-700 rounded-lg bg-rose-950/40 text-sm"
                href={resume}
                download="Anand_Sarolkar_2025.pdf"
            >
                Download CV
            </a>
        </div>
    );
};

export default Socials;

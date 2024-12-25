import PajamasDiscord from "./svg/PajamasDiscord";
import PajamasGithub from "./svg/PajamasGithub";

const Socials = () => {
    return (
        <div className="  flex justify-center items-center gap-2 ">
            <div className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 ">
                <PajamasGithub className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    Github
                </p>
            </div>
            <div className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 ">
                <PajamasDiscord className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    Github
                </p>
            </div>
            <div className=" text-xl relative hover:border-rose-200 group border-[0.5px] border-rose-200/30 rounded-md p-2 duration-150 ">
                <PajamasGithub className=" w-full h-full object-cover group-hover:text-rose-200   text-rose-200/30 duration-500" />
                <p className=" absolute top-10  group-hover:visible group-hover:opacity-100 duration-300  opacity-0 invisible transition-all bg-rose-950 px-2 py-2 rounded-md border-[1px] border-orange-400 font-medium text-xs">
                    Github
                </p>
            </div>
        </div>
    );
};

export default Socials;

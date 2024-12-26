import Primary from "./technologies/Primary";
import Secondary from "./technologies/Secondary";

const Skills = () => {
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

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import BackgroundBlur from "./components/svg/BackgroundBlur";

function App() {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);
    return (
        <section className=" bg-[#121212] text-white  w-full flex flex-col justify-start items-center antialiased ">
            <Hero />
            <div
                className="absolute z-0 top-0 w-full "
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <BackgroundBlur />
            </div>

            <h1 className=" px-2 my-10">Thanks for visiting!😁</h1>
        </section>
    );
}

export default App;

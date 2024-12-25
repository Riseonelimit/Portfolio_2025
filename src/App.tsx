import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);
    return (
        <section className=" bg-[#121212] text-white  w-full flex flex-col justify-start items-center antialiased ">
            <Hero />
        </section>
    );
}

export default App;

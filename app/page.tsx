import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
export default function Home() {
    return (
        <div className="px-4 flex flex-col max-w-6xl mx-auto items-center justify-center py-20 md:py-32">
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
        </div>

    )
}


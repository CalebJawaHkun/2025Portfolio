import Intro from "./Intro"
import Skills from "./Skills_Knowledges"
import Projects from "./Projects"
import Outro from "./Outro"
import Educations from "./Educations"

export default function Main() {
    return (
        <div className="
        max-w-[1200px] mx-auto p-4 
        [&>*+*]:mt-[3in]
        ">
            <Intro/>
            <Skills/>
            <Projects/>
            <Educations/>
            <Outro/>
        </div>
    )
}
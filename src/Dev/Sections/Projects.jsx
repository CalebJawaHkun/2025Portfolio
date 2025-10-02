import { SessionTxt, BaseHead, Smol, Tech, ProjLink } from "../Components/Subcomps"
import { rightArrow, left } from "../assets/icons/icons_barrel"
import Ps from '../assets/dat/Projects.json'
import UPs from '../assets/dat/UProjects.json'
import { useEffect, useMemo, useState } from "react"

const ContentDiv = ({children, c}) => 
<div className={`basis-100 flex-1 
md:basis-20 ${c}`}> 
    {children} 
</div>



function ProjCard({p, k, cb}) {

    const [hovered, setHovered] = useState(false)


    // useEffect(() => console.log(`${k}:${hovered}`), [])

    let [pname, txt, stack, _a, _b, dir] = p
    const coverimg = `/projs/${dir[0]}/01.jpg`
    return (
        <div key={'proj'+k}
        onClick={() => cb(k)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
            className="hover:bg-projhover 
            hover:dark:bg-projhover-white
            p-2 rounded-xl
            transition-all cursor-pointer">
            <div className="flex items-center"> 
                <BaseHead txt={pname}/> 
                <i className={`fa-solid fa-circle-arrow-right text-xl 
                pl-2
                transition-transform
                    ${hovered ? 'translate-x-2':'transalte-x-0'}`}></i>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <div className="basis-full md:basis-60"> 
                    <img src={coverimg} alt={pname} title={pname} className="rounded-md"/> 
                    
                </div>
                <div className="flex-1">
                    <Smol txt={txt} c="break-word"/>
                    <div> {stack.map(tech => <Tech txt={tech} k={tech}/>)} </div>     
                </div>
            </div>
        </div>
    )
}

function UProjCard({p, k}) {

    const [pname, more] = p
    const [detail, stack] = more

    return (
        <div key={'uproj'+k}>
            <BaseHead txt={pname}/>
            <div>
                <Smol txt={detail}/>
                <div> {stack.map(tech => <Tech txt={tech} k={tech}/>)} </div>
                {more[2] && <ProjLink to={more[2]}/>}
            </div>
        </div>
    )
}

function ProjectZone({title, children}) {
    return (
        <div className="flex flex-wrap justify-between">
        <SessionTxt txt={title}/>
        <div className="basis-170 text-[.9em] space-y-2">
            {children}
        </div>
    </div>
    )
}


export default function Projects({anchor="", setProjIndex}) {

    const UPS = useMemo(() => Object.entries(UPs), [])

    return (
        <section id={anchor}
        className="space-y-10">
            <ProjectZone title="Projects">
                {Ps.map((p, i) => <ProjCard p={p} k={i} cb={setProjIndex}/>)}
            </ProjectZone>
            <ProjectZone title={"Upcomming"}>
                {UPS.map((p, i) => <UProjCard p={p} k={i}/>)}
            </ProjectZone>
        </section>
    )
}


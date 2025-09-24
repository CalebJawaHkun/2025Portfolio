import { SessionTxt, BaseHead, Smol, Tech } from "../Components/Subcomps"
import { rightArrow } from "../assets/icons/icons_barrel"
import Ps from '../assets/dat/Projects.json'
import { useEffect, useState } from "react"

const ContentDiv = ({children, c}) => 
<div className={`basis-100 flex-1 
md:basis-60 ${c}`}> 
    {children} 
</div>

function ProjCard({p, k, cb}) {

    const [hovered, setHovered] = useState(false)

    // useEffect(() => console.log(`${k}:${hovered}`), [])

    let [pname, txt, stack, _a, _b, dir] = p
    const coverimg = `/projs/${dir[0]}/01.jpg`
    return (
        <div key={''+k}
        onClick={() => cb(k)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
            className="hover:bg-projhover p-2 rounded-xl
            transition-all cursor-pointer">
            <div className="flex items-center"> 
                <BaseHead txt={pname}/> 
                <img src={rightArrow} 
                className={`size-6 inline ml-2 
                ${hovered ? 'translate-x-2':'transalte-x-0'}
                transition-transform`}/>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                <ContentDiv> 
                    <img src={coverimg} alt={pname} title={pname} className="rounded-md"/> 
                </ContentDiv>
                <ContentDiv>
                    <Smol txt={txt}/>
                    <div> {stack.map(tech => <Tech txt={tech}/>)} </div>
                </ContentDiv>
            </div>
        </div>
    )
}


export default function Projects({anchor="", setProjIndex}) {

    return (
        <section id={anchor}>
            <SessionTxt txt="Projects"/>
            <div className="grid grid-cols-1 gap-4
            lg:grid-cols-2">
                {Ps.map((p, i) => <ProjCard p={p} k={i} cb={setProjIndex}/>)}
            </div>
        </section>
    )
}


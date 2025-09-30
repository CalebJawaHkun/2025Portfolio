import { SessionTxt, Smol, Base, BaseHead } from "../Components/Subcomps";
import { useState } from "react";
import Edus from '../assets/dat/Educations.json'
import { tarrow } from "../assets/icons/icons_barrel";
import { useMemo } from "react";
import { redirect } from "../Components/Subcomps";

function EduName({txt, to}) {

    const [hovered, setHovered] = useState(false)
    
    return <div
    onClick={() => redirect(to)}
    className="cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}> 
        <Base txt={txt} c="inline hover:text-mainbtn-dark"/> 
        <img 
        className={`inline relative size-2 ${hovered ? 'left-1 size-2 bottom-1':'left-0 size-3 bottom-0'} transition-all`}
        src={tarrow} alt="Top Right" title="Top Right"/>
    </div>
}

export default function Educations({anchor=""}) {


    const Es = useMemo(() => Object.entries(Edus), [])
    return (
        <section
        id={anchor}
        className="md:flex h-80
        ">
            <SessionTxt txt="Educations"/>
            <div className="space-y-4
            basis-140 ml-auto
            lg:basis-180">
                {Es.map(([timeline, txts]) => 
                    <div key={timeline}
                    className="md:flex ">
                        <div>
                            <EduName txt={txts[0]} to={txts[2]}/>
                            <Smol txt={txts[1]}/>
                        </div>
                        <BaseHead txt={timeline} c="ml-auto font-bold"/>
                    </div>
                )}
            </div>
        </section>
    )
}


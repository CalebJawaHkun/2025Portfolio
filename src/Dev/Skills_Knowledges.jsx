import { SessionTxt, BaseHead } from "./Subcomps";
import Icons from '../assets/icons/icons_barrel'
import Ks from '../assets/dat/Knowledges.json'
import { useMemo } from "react";


function Wrapper({items, title, c=""}) {
    return <div className={`
        ${c}`}>
        <SessionTxt txt={title}/>
        <div className="mt-2 p-2 bg-icon-bg rounded-xl
        flex flex-wrap flex-row gap-2
        lg:justify-between max-sm:justify-between"> 
            {items.map((item, i) => <Circle obj={item} key={''+i}/>)}
        </div>
    </div>
}

function Circle({obj}) {
    const [src, name] = obj
    return <div 
    className="bg-black rounded-full aspect-square size-25
    flex justify-center items-center"
    key={name}>
        <img className="w-5/7 filter-[brightness(0)_invert(1)]"
        src={src} alt={name} title={name}/>
    </div>
}

function Skills() {
    return <div className="
            grid grid-cols-1 gap-4
            md:grid-cols-5 md:grid-rows-[auto_auto] md:gap-2
            ">
                <Wrapper items={Icons.skills} title="Skills"
                c="rounded-r-none
                md:col-[1/3] 
                "/>
                <Wrapper items={Icons.framworks} title="Framworks"
                c="
                md:col-span-3
                rounded-l-none"/>
                <Wrapper items={Icons.tools} title="Tools"
                c="col-span-full"/>
        </div>
}

function Knowledges() {
    let ks = useMemo(() => Object.entries(Ks), [])
    return <div className="mt-4">
        <SessionTxt txt="Knowledges"/>
        <div className="flex flex-wrap gap-4
        max-md:divide-y-2">
            {ks.map(([title, short], i) => 
            <div key={title} className="flex-1 basis-100">
                <BaseHead txt={`${i<10&&'0'}${i+1} ${title}`}/>
                <p>{short}</p>
            </div>)}
        </div>
    </div>
}

export default function Skills_Knowledges({anchor=""}) {
    return (
        <section id={anchor}>
            <Skills/>
            <Knowledges/>
        </section>
    )
}
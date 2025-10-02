import { SessionTxt, BaseHead } from "../Components/Subcomps"
import Icons from '../assets/icons/icons_barrel'
import Ks from '../assets/dat/Knowledges.json'
import { useEffect, useMemo, useState, useReducer } from "react";


function Wrapper({items, title, c=""}) {

    const [isMd, setIsMd] = useState(false)
    const [labelsShown, setIflabelsAreShown] = useReducer(pre => !pre, false)

    useEffect(() => {
        const checkIfMd = () => setIsMd(window.innerWidth <= 768)
        checkIfMd()

        window.addEventListener('resize', checkIfMd)

        return () => window.removeEventListener('resize', checkIfMd)
    }, [])

    useEffect(() => {
        let interval;
        if(isMd) {
            interval = setInterval(setIflabelsAreShown, 15 * 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isMd])

    return <div className={`
        ${c}`}>
        <SessionTxt txt={title}/>
        <div className="mt-2 p-2 bg-icon-bg dark:bg-icon-bg-white
        rounded-xl
        flex flex-wrap flex-row gap-2
        lg:justify-between max-sm:justify-between"> 
            {items.map((item, i) => 
            <Circle obj={item} key={''+i} md={{isMd, labelsShown}}/>)}
        </div>
    </div>
}

function Circle({obj, md}) {
    const [src, name] = obj
    const [hovered, setHovered] = useState(false)
    const { isMd, labelsShown } = md

    useEffect(() => {
        if(isMd) setHovered(labelsShown)
    }, [labelsShown])

    const pos = 'absolute left-1/2 top-1/2 -translate-1/2'
    const alternator = con => con ? 'opacity-0':'opacity-100'
    return <div 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="bg-black rounded-full aspect-square size-25
    relative"
    key={name}>
        <img className={`w-5/7 filter-[brightness(0)_invert(1)] ${pos} ${alternator(hovered)} circleTransit`}
        src={src} alt={name} title={name}/>
        <BaseHead txt={name} c={`${pos} ${alternator(!hovered)} circleTransit dark:text-white`}/>
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
                <BaseHead txt={`${i<9 ? '0':''}${i+1} ${title}`}/>
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
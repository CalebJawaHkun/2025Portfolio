import { BaseHead, P, Tech, Close, ProjLink } from "./Subcomps"
import Ps from '../assets/dat/Projects.json'
import { githubwhite, canvawhite, left } from '../assets/icons/icons_barrel'
import { useEffect, useState } from "react"


const ProjAbout = ({txt}) => <P txt={txt} c="text-projabout-size mt-2"/>
const Icon = ({src}) => <img src={src} className="size-6 inline"/>
const Next = ({cb=null, isLeft=true}) => <div
    onClick={cb}
    className={`absolute top-1/2 -translate-y-1/2 w-10 ${isLeft ? 'left-2':'right-2'} cursor-pointer`}
> <i className={`fa-solid fa-angle-${isLeft ? 'left':'right'} 
hover:scale-90 text-mainbtn-dark dark:text-white
text-3xl`}></i> </div>

export default function Proj({projDat}) {
    
    const { projIndex, setProjIndex } = projDat
    let [pname, _, stack, detail, links, dir] = Ps[projIndex<0 ? 0:projIndex]
    let [loc, size] = dir

    // const [current, next] = useReducer((pre, toLeft) => toLeft ? (pre-1+size)%size : (pre+1)%size, 0)

    const [current, next] = useState(0)
    const left = () => next(pre => (pre-1+size)%size)
    const right = () => next(pre => (pre+1)%size)
    // useEffect(() => console.log(current), [current])
    useEffect(() => next(0), [projIndex])

    return (
        <div className={`
        w-dvw bg-mainbg-dark
        dark:bg-mainbg-white
        overflow-hidden
        fixed top-0 left-0 z-1 dropTransit
        ${projIndex>-1 ? 'h-dvh':'h-0'}`}>

            <div className="my-auto p-4 
            max-w-[1500px] mx-auto
            lg:-translate-y-1/2 lg:relative lg:top-1/2">
                <Close cb={() => setProjIndex(-1)}/>
                <BaseHead txt={pname}/> 

                <div className="mt-2 flex flex-wrap gap-4 items-start">

                    <div className="relative basis-full lg:basis-140 xl:basis-200"> 
                        <img className="rounded-xl w-full" src={`/projs/${loc}/${current<10&&'0'}${current+1}.jpg`} alt="intro" title="intro"/>
                        <Next isLeft={true} cb={left}/>
                        <Next isLeft={false} cb={right}/> 
                    </div>

                    <div className="flex-1">
                        <div className="">
                            <BaseHead txt="Project Detail"/>
                            <div className=""> {stack.map(tech => <Tech txt={tech}/>)} </div>
                            <ProjAbout txt={detail}/>
                        </div>
                        <div className="">
                            {links.map((link, i) => 
                            <div key={i+'a'} className="mt-4 md:mt-2">
                                    <div> 
                                        <Icon src={i ? canvawhite:githubwhite}/> 
                                        <h3 className="inline"> {i ? 'Canva Design':'Repository'} </h3>
                                    </div>
                                    <ProjLink to={link}/>
                            </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
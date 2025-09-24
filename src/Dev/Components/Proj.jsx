import { BaseHead, P, Tech, Close } from "./Subcomps";
import Ps from '../assets/dat/Projects.json'
import { githubwhite, canvawhite } from "../assets/icons/icons_barrel";


const getNumberedArr = num => new Array(size).fill(undefined).map((v, i) => i)
const ProjAbout = ({txt}) => <P txt={txt} c="text-projabout-size"/>
const ProjLink = ({to}) =>
<a href={to} className="underline font-semibold text-projlink-size text-mainbtn-dark"> {to} </a>
const Icon = ({src}) => <img src={src} className="size-5 inline"/>

export default function Proj({projDat}) {

    const { projIndex, setProjIndex } = projDat
    let [pname, _, stack, detail, links, dir] = Ps[projIndex<0 ? 0:projIndex]
    let [loc, size] = dir

    const styles = {
        dropped: 'h-dvh px-4 py-10 sm:px-[1in] md:px-[2in] lg:px-[2.5in] md:py-4 overflow-hidden opacity-100',
        retracked: 'h-0 p-0 overflow-hidden opacity-80'
    }
  
    return (
        <div className={`fixed z-1 top-0
        max-w-[1200px] mx-auto 
        bg-mainbg-dark
        dropTransit 
        ${styles[projIndex>-1 ? 'dropped':'retracked']}`}>

            <Close cb={() => setProjIndex(-1)}/>
            <div>
                <BaseHead txt={pname}/> 
                <div className="w-full"> <img className="rounded-xl w-full" src={`/projs/${loc}/01.jpg`} alt="intro" title="intro"/> </div>
            </div>
            <div
            className="flex gap-6 flex-wrap
            mt-4">
                <div className="">
                    <BaseHead txt="Stack"/>
                    <div> {stack.map(tech => <Tech txt={tech}/>)} </div>
                </div>
                <div className="flex-auto basis-120">
                    <BaseHead txt="About"/>
                    <ProjAbout txt={detail}/>
                </div>
                <div className="flex-auto">
                    <BaseHead txt="Links"/>
                    <div className="flex flex-wrap gap-4">
                        {links.map((link, i) => 
                        <div className="mt-2 md:mt-0
                        ">
                            <div> 
                                <Icon src={i ? canvawhite:githubwhite}/> 
                                <h3 className="inline"> {i ? 'Design':'Repository'} </h3>
                            </div>
                            <ProjLink to={link}/>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}
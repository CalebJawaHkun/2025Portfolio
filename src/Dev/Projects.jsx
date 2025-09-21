import { SessionTxt, BaseHead, Smol } from "./Subcomps"
import { rightArrow } from "../assets/icons/icons_barrel"
import Ps from '../assets/dat/Projects.json'
import { laptop } from "../assets/projs/Projs_barrel"

const Tech = ({txt}) => <span className="border-2 rounded-md mr-1 px-1 text-token-size"> {txt} </span>
const ContentDiv = ({children, c}) => 
<div className={`basis-100 flex-1 
md:basis-60 ${c}`}> 
    {children} 
</div>

export default function Projects({anchor=""}) {
    return (
        <section id={anchor}>
            <SessionTxt txt="Projects"/>
            <div className="grid grid-cols-1 gap-4
            lg:grid-cols-2">
                {Ps.map((p, i) => {
                    let [pname, txt, stack] = p
                    // if(i==0) console.log(Array.isArray(stack))

                    return <div key={''+i}
                    className="">
                        <div className="flex items-center"> 
                            <BaseHead txt={pname}/> 
                            <img src={rightArrow} className="size-6 inline ml-2"/>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <ContentDiv> <img src={laptop} alt={pname} title={pname}/> </ContentDiv>
                            <ContentDiv>
                                <Smol txt={txt}/>
                                <div> {stack.map(tech => <Tech txt={tech}/>)} </div>
                            </ContentDiv>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}


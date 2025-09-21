import { useMemo, useReducer } from "react"
import { SessionTxt, Smol } from "../Dev/Subcomps"
import { Close } from "../Dev/Subcomps"


export default function Contact({contactIsVis, ifContactIsVis}) {

    const links = useMemo(() => ['Just Saying Hi', "We'd Like to Hire!", 'Like to talk with you!'], [])

    const setDisplay = (s, E) => E.target.style.visibility = s
    return (
        <section 
        onAnimationStart={E => setDisplay('visible', E)}
        onAnimationEnd={E => setDisplay(!contactIsVis && 'hidden', E)}
        className={`
        messageCardGradient messageCardNormal
        md:bg-contactbg
        text-[1.5em] md:text-base-size
        fixed right-0 bottom-0 z-1
        md:right-4 md:bottom-4
        md:w-90 md:h-auto
        w-dvw h-dvh
        ${contactIsVis ? 'animate-fadeup':'animate-fadedown'}
        contactTransit
        md:rounded-lg p-8 md:p-4`}>
            <Close cb={() => ifContactIsVis(false)}/>
            <SessionTxt txt="Send A Mail"/>
            <Smol txt="Send Me An Email!"/>
            <Smol txt="If you think I can be of use, or if just a general ‘What’s Up?’, I am all Ears!"/>
            <div className="mt-2 space-y-2 flex flex-col items-start text-mainbtn-dark">
                {links.map(link =>
                    <div key={link} className="text-smol-size border-2 border-contactb py-1 px-2 rounded-xl"> 
                        <a> {link} </a>
                    </div>
                )}
            </div>
        </section>
    )
}
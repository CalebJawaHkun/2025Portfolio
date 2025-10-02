import Intro from "./Intro"
import Skills from "./Skills_Knowledges"
import Projects from "./Projects"
import Outro from "./Outro"
import Educations from "./Educations"
import { useEffect, useMemo, useState, useReducer } from "react"
import MenuBarV2 from "../Components/MenuBar"
import Cursor from "../Components/Cursor"
import Proj from "../Components/Proj"
import Contact from "../Components/Contact"
import DarkModeToggle from "../Components/DarkModeToggle"

export default function Main() {

    const sections = useMemo(() => [
        ['Intro', Intro, 'About'],
        ['Skills', Skills, 'Skills/Tools'],
        ['Projects', Projects, 'Projects'],
        ['Educations', Educations, 'Educations'],
        ['', Outro, 'Contact']
    ], []) 

    const [cPos, trackPos] = useReducer((pre, E) => ({x: E.clientX, y: E.clientY}), 
    {x: 0, y: 0})
    const [cursorInView, setIfCursorInView] = useState(false)
    const [isClickable, setIfClickable] = useState(false)
    const [contactIsVis, ifContactIsVis] = useState(false)
    const [projIndex, setProjIndex] = useState(-1)

    useEffect(() => {

        document.documentElement.style.scrollBehavior = 'smooth'

        const addE = (e, cb, to) => to?.addEventListener(e, cb)
        const delE = (e, cb, to) => to?.removeEventListener(e, cb)

        const mouseMove = E => {
            trackPos(E)

            const target = E.target 
            const it = target.tagName 

            const isBtnOfSort = () => (
                it==='BUTTON' || 
                it==='A' || 
                target.getAttribute('role')==='button' ||
                getComputedStyle(target).cursor === 'pointer')


            setIfClickable(isBtnOfSort())
        }

        const mouseLeave = () => setIfCursorInView(false)
        const mouseEnter = () => setIfCursorInView(true)

        const doc = document.documentElement

        addE('mousemove', mouseMove, window)
        addE('mouseleave', mouseLeave, doc)
        addE('mouseenter', mouseEnter, doc)

        return () => {
            delE('mousemove', mouseMove, window)
            delE('mouseleave', mouseLeave, doc)
            delE('mouseenter', mouseEnter, doc)
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', projIndex>-1)
        return () => document.body.classList.remove("overflow-hidden");
    }, [projIndex]);

    // useEffect(() => console.log(`X: ${cPos.x}. Y: ${cPos.y}`), [cPos])

    return (
        <div className={`relative
        max-w-[1200px] mx-auto p-4 
        grid grid-cols-1 gap-[4in]
        
        `}>
            <DarkModeToggle/>
            <Proj projDat={{projIndex, setProjIndex}}/>
            <Contact contactIsVis={contactIsVis} ifContactIsVis={ifContactIsVis}/>
            <Cursor pos={cPos} isPointer={isClickable} isWithin={cursorInView}/>
            <MenuBarV2 sections={sections} ifContactIsVis={ifContactIsVis}/>
            {sections.map(([anchor, Comp]) => <Comp anchor={anchor} setProjIndex={setProjIndex}/>)}
            
        </div>
    )
}
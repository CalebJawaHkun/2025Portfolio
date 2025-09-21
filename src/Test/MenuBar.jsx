import { useEffect, useMemo, useRef, useState } from "react"

const Link = ({to, cb, c='', children}) => 
<a href={`#${to}`} key={to}
onClick={cb}
className={`${c} relative z-1 uppercas leading-relaxed`}> 
    {children} 
</a>

export default function MenuBar({sections}) {
    const names = useMemo(() => sections.map(
        ([anchor, _, secname]) => [anchor, secname]
    ), [])

    const menuRef = useRef(null)
    const highlightRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const moveHighlight = index => {
        const menuItem = menuRef.current.children[index]

        
        if(menuItem && highlightRef.current) {
            console.log(menuItem)
            const h_style = highlightRef.current.style
            h_style.width = `${menuItem.offsetWidth+15}px`
            h_style.height = `${menuItem.offsetHeight}px`
            h_style.left = `${menuItem.offsetLeft-8}px`
        }
    }

    useEffect(() => {
        moveHighlight(activeIndex)
        window.addEventListener('resize', ()=> moveHighlight(activeIndex))

        // console.log('Ran!')
        return () => window.removeEventListener('resize', () => moveHighlight(activeIndex))
    },[activeIndex])

    return (
        <nav className="
        py-2 px-4 rounded-[5rem]
        text-[.9rem] sm:text-[1em]
        fixed top-5 left-1/2 
        tranform -translate-x-1/2
        flex gap-4 backdrop-blur-xl
        " ref={menuRef}>
            {names.map(([anchor, secname], i) => 
                <Link to={anchor} cb={() => setActiveIndex(i)}> {secname} </Link>
            )}
            <div ref={highlightRef}
            className="absolute top-2 
            h-full bg-navhighlight rounded-2xl 
            transition-all duration-300"></div>
        </nav>
    )
}
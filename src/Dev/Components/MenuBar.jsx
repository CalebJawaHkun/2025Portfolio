import { useEffect, useMemo, useRef, useState } from "react"

const Link = ({to, cb, c='', children}) => 
<a href={`#${to}`} key={to}
onClick={cb}
className={`${c} relative z-1 uppercas leading-relaxed`}> 
    {children} 
</a>

export default function MenuBarV2({sections, ifContactIsVis}) {
    const secs = useMemo(() => sections.map(
        ([anchor, _, secname]) => [anchor, secname]
    ), [])

    const menuRef = useRef(null)
    const highlightRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const moveHighlight = index => {
        const menuItem = menuRef.current.children[index]

        if(menuItem && highlightRef.current) {
            const h_style = highlightRef.current.style
            h_style.width = `${menuItem.offsetWidth+15}px`
            h_style.height = `${menuItem.offsetHeight}px`
            h_style.left = `${menuItem.offsetLeft-8}px`
        }
    }

    useEffect(() => {
        const m = () => moveHighlight(activeIndex)
        m()
        window.addEventListener('resize', m)
        return () => window.removeEventListener('resize', m)
    },[activeIndex])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        const index = secs.findIndex(
                            ([anchor]) => anchor === entry.target.id
                        )

                        if(index !== -1) {
                            setActiveIndex(index)
                            moveHighlight(index)
                        }
                    }
                })
            }, {threshold: 0.6}
        )

        secs.forEach(([anchor]) => {
            const section = document.getElementById(anchor)
            if(section) observer.observe(section)
        })


        return () => observer.disconnect()
    }, [])

    return (
        <nav className="
        py-2 px-4 sm:rounded-[5rem]
        text-[.9rem] sm:text-[1em]
        fixed 
        top-0 left-0 w-full sm:w-auto
        sm:top-5 sm:left-1/2 z-0
        sm:-translate-x-1/2
        flex gap-6 sm:gap-8 justify-center
        backdrop-blur-xl
        " ref={menuRef}>
            {secs.map(([anchor, secname], i) => 
                <Link to={anchor} cb={
                    i<secs.length-1?
                    () => setActiveIndex(i)
                    :
                    E => {
                        E.preventDefault()
                        ifContactIsVis(true)
                    }}> {secname} </Link>
            )}
            <div ref={highlightRef}
            className="absolute top-2 
            h-full bg-navhighlight dark:bg-navhighlight-white rounded-2xl 
            transition-all duration-300"/>
        </nav>
    )
}
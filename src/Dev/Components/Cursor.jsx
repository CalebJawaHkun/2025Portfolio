import { useEffect, useState } from "react"

export default function Cursor({pos, size=24, isPointer=false, isWithin}) {

    const [isInView, setIfInView] = useState(false)
    const trackViewport = v => {
        let vps = {'sm':640, 'md':768, 'lg':1024, 'xl': 1280, '2xl':1536}
        let minwidth = vps[v]      

        setIfInView(window.innerWidth >= minwidth)
    }
    useEffect(() => {
        window.addEventListener('resize', () => trackViewport('2xl'))
        return () => window.removeEventListener('resize', () => trackViewport('xl'))
    }, [])

    // useEffect(() => console.log('Is In View: ', isInView), [isInView])

    const {x, y} = pos

    const tSize = isPointer ? 16:(16 * size / 4)

    return isWithin && pos && <div
    className={`
    ${!isInView && 'invisible'}
    cursorDiv fixed z-2
    border-2 rounded-full border-cursor
    pointer-events-none
    cursorTransition`}
    style={{
        left: x, top: y,
        width: `${tSize}px`, height: `${tSize}px`,
    }}>
        <div className="cursorDiv absolute left-1/2 top-1/2 
        p-1 bg-cursor"></div>
    </div>
}
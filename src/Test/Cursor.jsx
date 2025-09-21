import { useEffect } from "react"

export default function Cursor({pos, size=24, isPointer=false, isWithin}) {

    const {x, y} = pos
    // useEffect(() => console.log(`X: ${x}, Y: ${y}`), [])

    const tSize = isPointer ? 16:(16 * size / 4)

    return isWithin && pos && <div
    className="cursorDiv fixed z-2
    border-2 rounded-full border-cursor
    pointer-events-none
    cursorTransition"
    style={{
        left: x, top: y,
        width: `${tSize}px`, height: `${tSize}px`,
    }}>
        <div className="cursorDiv absolute left-1/2 top-1/2 
        p-1 bg-cursor"></div>
    </div>
}
import { useState, useEffect } from "react"

export default function AnimationTest() {
    const [isDropped, setIfDropped] = useState(false)
    useEffect(() => {
        window.addEventListener('mousedown', () => setIfDropped(true))
        window.addEventListener('mouseup', () => setIfDropped(false))
    },[])

    return (
        <div className={`${isDropped ? 'p-4':'p-0'} 
        rounded-xl m-4 bg-white text-black
        ${isDropped ? 'h-70':'h-0'} w-80 overflow-hidden dropTransit`}>
            <h2> This is the heading </h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.</p>
            <a href="#"> something </a>
        </div>
    )
}
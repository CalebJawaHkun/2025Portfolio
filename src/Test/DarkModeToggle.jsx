import { useEffect, useReducer, useState } from "react"

export default function DarkModeToggle() {


    const [isDark, toggle] = useReducer(pre => {
        let next = !pre
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark':'light')
        return next
    }, false, () => {
        let wasDark = localStorage.getItem('theme')=='dark'
        wasDark && document.documentElement.classList.add('dark')
        return wasDark
    })


    return (
        <div className="">
            <div className="p-4 rounded-xl border-3 dark:bg-black dark:text-white transition">
                <h1 className="font-bold text-2xl"> This is a card heading </h1>
                <p> this is something else. this is something else. this is something else. </p>
            </div>
            <button onClick={toggle}> Toggle {isDark?'Light':'Dark'} Mode </button>
        </div>
    )
}
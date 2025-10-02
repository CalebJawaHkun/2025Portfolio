import { useReducer } from "react"

export default function DarkModeToggle() {


    const [isDark, toggle] = useReducer(pre => {
        let next = !pre
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark':'light')
        return next
    }, true, () => {
        let wasDark = localStorage.getItem('theme')=='dark'
        wasDark && document.documentElement.classList.add('dark')
        return wasDark
    })


    return (
        <div 
        onClick={toggle}
        className="fixed 
        bg-white dark:bg-black
        right-2 bottom-2 rounded-full
        border-1 border-black
        shadow-lg
        cursor-pointer
        transition-color
        w-13 p-0.5">
            <div className={`
            ${isDark ? 'translate-x-6.5':'translate-x-0'}
            size-5 bg-black dark:bg-white rounded-full
            transition-all`}/>
        </div>
    )
}
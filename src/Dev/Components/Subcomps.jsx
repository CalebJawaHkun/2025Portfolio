import { cross } from "../assets/icons/icons_barrel"

const P = ({txt, c=''}) => <p className={`${c}`}> {txt} </p>

const SessionTxt = ({txt, c=''}) => 
<h3 className={`text-session-size capitalize font-bold ${c}`}> {txt} </h3>

const BaseHead = ({txt, c=''}) => 
<h4 className={`text-basehead-size capitalize font-semibold ${c}`}> {txt} </h4>

const Base = ({txt, c=''}) => <P txt={txt} c={`text-base-size ${c}`}/>
const Smol = ({txt, c=''}) => <P txt={txt} c={`text-smol-size ${c}`}/>

const Btn = ({cb=null, txt, c='', disabled=false, isSubmit=false}) => 
<button 
key={txt}
disabled={disabled}
type={isSubmit ? 'submit':''}
className={
    `
    disabled:text-maintxt-dark disabled:hover:no-underline
    capitalize text-mainbtn-dark font-bold cursor-pointer
    dark:text-mainbtn-white
    hover:underline ${c}`
} onClick={cb}> {txt} </button>

const Close = ({cb=null, x=6, y=4}) => <div
    onClick={cb}
    style={{
        position: 'absolute',
        top: `${y}px`,
        right: `${x}px`,
    }}
> <i className="fa-solid fa-xmark hover:scale-120 text-4xl md:text-3xl"></i> </div>

const Tech = ({txt}) => <div key={txt} className="border-2 rounded-md mr-1 px-1 text-token-size inline-block"> {txt}  </div>

const redirect = url => window.open(url, "_blank")

const ProjLink = ({to}) =>
<a href={to} target="_blank" className="font-semibold text-projlink-size text-mainbtn-dark dark:text-mainbtn-white inline break-all"> {to} </a>

export {
    SessionTxt, Base, Btn, BaseHead, Smol, Close, Tech, P
}

export { redirect, ProjLink }
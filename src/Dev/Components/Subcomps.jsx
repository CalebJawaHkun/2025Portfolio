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
    hover:underline ${c}`
} onClick={cb}> {txt} </button>

const Close = ({cb=null, x=4, y=4}) => <div
    onClick={cb}
    style={{
        position: 'absolute',
        top: `${y}px`,
        right: `${x}px`,
    }}
    className="size-10 md:size-8
    hover:scale-120"
> <img src={cross} alt="Close Btn" title="Close Btn"/> </div>

const Tech = ({txt}) => <span key={txt} className="border-2 rounded-md mr-1 px-1 text-token-size"> {txt} </span>

const redirect = url => window.open(url, "_blank")

const ProjLink = ({to}) =>
<a href={to} target="_blank" className="font-semibold text-projlink-size text-mainbtn-dark inline break-all"> {to} </a>

export {
    SessionTxt, Base, Btn, BaseHead, Smol, Close, Tech, P
}

export { redirect, ProjLink }
import { cross } from "../assets/icons/icons_barrel"

const P = ({txt, c=''}) => <p className={`${c}`}> {txt} </p>

const SessionTxt = ({txt, c=''}) => 
<h3 className={`text-session-size capitalize font-bold ${c}`}> {txt} </h3>

const BaseHead = ({txt, c=''}) => 
<h4 className={`text-basehead-size capitalize font-semibold ${c}`}> {txt} </h4>

const Base = ({txt, c=''}) => <P txt={txt} c={`text-base-size ${c}`}/>
const Smol = ({txt, c=''}) => <P txt={txt} c={`text-smol-size ${c}`}/>

const Btn = ({cb=null, txt, c=''}) => 
<button className={
    `capitalize text-mainbtn-dark font-bold cursor-pointer my-4 ${c}
    hover:underline`
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

const Tech = ({txt}) => <span className="border-2 rounded-md mr-1 px-1 text-token-size"> {txt} </span>

export {
    SessionTxt, Base, Btn, BaseHead, Smol, Close, Tech, P
}
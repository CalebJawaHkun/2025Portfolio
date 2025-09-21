import { cross } from "../assets/icons/icons_barrel"

const SessionTxt = ({txt, c=''}) => 
<h3 className={`text-session-size capitalize font-bold ${c}`}> {txt} </h3>

const BaseHead = ({txt, c=''}) => 
<h4 className={`text-basehead-size capitalize ${c}`}> {txt} </h4>

const Base = ({txt, c=''}) => <p className={`text-base-size ${c}`}> {txt} </p>

const Smol = ({txt, c=''}) => <p className={`text-smol-size ${c}`}> {txt} </p>

const Btn = ({cb=null, txt, c=''}) => 
<button className={
    `capitalize text-mainbtn-dark font-bold cursor-pointer my-4 ${c}`
} onClick={cb}> {txt} </button>

const Close = ({cb=null, x=4, y=4}) => <div
    onClick={cb}
    style={{
        position: 'absolute',
        top: `${y}px`,
        right: `${x}px`,
    }}
    className="size-12 md:size-8
    hover:scale-120"
> <img src={cross} alt="Close Btn" title="Close Btn"/> </div>

export {
    SessionTxt, Base, Btn, BaseHead, Smol, Close
}
function SessionTxt({txt, c=''}) {
    return <h3 className={`text-session-size capitalize font-bold ${c}`}> {txt} </h3>
}
function BaseHead({txt, c=''}) {
    return <h4 className={`text-basehead-size capitalize ${c}`}> {txt} </h4>
}
function Base({txt, c=''}) {
    return <p className={`text-base-size ${c}`}> {txt} </p>
}
function Smol({txt, c=''}) {
    return <p className={`text-smol-size ${c}`}> {txt} </p>
}
function Btn({cb=null, txt, c=''}) {
    return <button className={`capitalize text-mainbtn-dark font-bold
    my-4 ${c}`} onClick={cb}> {txt} </button>
}


export {
    SessionTxt, Base, Btn, BaseHead, Smol
}
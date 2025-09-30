import { useEffect, useRef, useState } from "react"
import { SessionTxt, Smol, Close, Btn } from "../Dev/Components/Subcomps"
import emailjs from "emailjs-com"

const Input = ({ph, c, name='', type='', disabled=false}) => 
<input 
disabled={disabled}
className={`disabled:border-white block w-full ${c}`} type={type} placeholder={ph} name={name}
required/>

export default function Contact({contactIsVis, ifContactIsVis}) {
    const form = useRef()

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ALERT = import.meta.env.VITE_EMAILJS_TEMPLATE_ALERT
    const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY 
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const [sending, setIsSending] = useState(false)
    const [formResult, setFormResult] = useState(null)

    useEffect(() => {
        let timeout
        if(formResult) timeout = setTimeout(() => setFormResult(null), 4 * 1000)

        return () => clearTimeout(timeout)
    }, [formResult])

    function simulateSummit(E) {
        E.preventDefault()

        const cForm = form?.current
        if(!cForm) return console.log('There was no form data.')

        setIsSending(true)    

        const theformdata = new FormData(cForm)
        const objdat = Object.fromEntries(theformdata.entries())

        console.log(`Form Dat: `, objdat)

        const generateResult = new Promise((ok, not) => {
            let rand = Math.floor(Math.random() * 2)
            rand ? ok('Resolved!'):not('Did not resolve!')
        })

        generateResult
            .then(result => setFormResult({status: true, msg: result}))
            .catch(err => setFormResult({status: false, msg: err}))
    }

    async function handleSubmit(E) {
        E.preventDefault()
        setIsSending(true)

        const cForm = form?.current
        if(!cForm) return console.log('There was no form data.')

        const send = TPK => emailjs.sendForm(SERVICE_ID, TPK, cForm, PUBLIC_KEY)   
        let status
        let msg

        try {
            await send(TEMPLATE_REPLY)
            await send(TEMPLATE_ALERT)
            console.log('Email Send Successful!')

            status = true
            msg = 'Email Send Successful!'
        } catch(err) {
            console.error('Email JS: ', err)

            status = false
            msg = 'Something went wrong! Try Again.'
        } finally {
            const formDat = { status, msg }
            setIsSending(false)
            setFormResult(formDat)

            console.log('EmailJS Call complete.')
        }
    }

    const generalInput = 
    "border-2 w-full border-inputborder px-2 py-1 rounded-lg "+
    "focus:border-mainbtn-dark focus:outline-none"

    const setDisplay = (s, E) => E.target.style.visibility = s
    return (
        <section 
        onAnimationStart={E => setDisplay('visible', E)}
        onAnimationEnd={E => setDisplay(!contactIsVis && 'hidden', E)}
        className={`
        messageCardNormal bg-contactbg
        text-[1.5em] md:text-base-size
        fixed right-0 bottom-0 z-1
        md:right-4 md:bottom-4
        md:w-90 md:h-auto
        w-dvw h-dvh
        ${contactIsVis ? 'animate-fadeup':'animate-fadedown'}
        contactTransit
        md:rounded-lg p-8 md:p-4`}>
            <Close cb={() => {
                if(sending) return
                ifContactIsVis(false)
            }}/>
            <SessionTxt txt="Send A Mail"/>
            <Smol txt="If you think I can be of use, or if just a general ‘What’s Up?’, I am all Ears!"/>
            <form className="mt-2 space-y-2 text-input-txt"
            ref={form}
            onSubmit={E => handleSubmit(E)}>
                <Input disabled={sending} ph="Name" c={`${generalInput}`} name="name" type="text"/>
                <Input disabled={sending} ph="Email" c={`${generalInput}`} name="email" type="email"/>
                <textarea disabled={sending} className={`disabled:border-white ${generalInput} resize-none min-h-70`} placeholder="Message"
                name="message" required/>
                <div>
                    <Btn disabled={sending} txt="Send Message" c="my-0 uppercase" isSubmit={true}/>
                    {sending && <div className="border-2 size-6 rounded-full border-b-black
                    inline-block ml-2 translate-y-1 animate-spin"/>}
                    {formResult && <h4
                    className={`${formResult.status ? 'text-maintxt-dark':'text-red-500'} ml-2 inline-block`}
                    > {formResult.msg} </h4>}
                </div>
            </form>
        </section>
    )
}
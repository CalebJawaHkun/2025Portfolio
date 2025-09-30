import { SessionTxt, Btn, Base, redirect } from "../Components/Subcomps"

export default function Intro({anchor}) {
    return (
        <section id={anchor}>
            <div className="font-bold text-6xl lg:text-8xl
            h-dvh
            flex flex-col justify-center">
                <h1> Hi! My Name is Caleb Jawa Hkun. 
                A Jr. Full-stack developer from Yangon, Myanmar.</h1>
            </div>

            <div className="[&>*+*]:mt-2">
                <SessionTxt txt="About Me"/>
                <Base txt="I am an enthusiastic developer who loves computative, complex logics. 
                    I excel at computational thinking, designing and building software 
                    architectures that could bring the best digital solutions. 
                    I'm especially keen on backend engineering thus is on my journey to 
                    hone my skills regarding that area. But! Reflecting on myself, I realize that 
                    I'm currently more well versed on UI/UX design than backend development as 
                    most of my recent projects were focused mostly on front-end Designs.
                   "/>
                <Base txt="Learning and Growth is my passion and while not exhaustive, 
                    my ultimate Goal in this profession is to accomplish 200 Personal Projects.
                    But realistically speaking, my current immediate goal is to gain 
                    hands-on experiences of corporate integration and team coordination. 
                    I realize that while learning is good, a guided and oriented experience 
                    is much more valuable, which I am lacking. For the very reason, I am 
                    actively seeking opportunities where I can receive such experiences  
                    while at the same time contribute."/>
            </div>
            <div className="flex justify-between md:justify-start gap-4">
                {[['View Video Portfolio', 'https://youtu.be/_AH0eQ4S_Ys'], 
                ['Grab Resume Copy','https://drive.google.com/file/d/1NGFzyPQw73ptoK55lDr6IoBNLv0dfrXT/view?usp=sharing']].map(
                    ([txt, to]) => <Btn c="mt-2" txt={txt} cb={() => redirect(to)}/>
                )}
            </div>
        </section>
    )
}
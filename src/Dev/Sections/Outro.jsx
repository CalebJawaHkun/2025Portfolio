import { useMemo } from "react";
import { Smol, redirect } from "../Components/Subcomps";

export default function Outro({anchor=""}) {

    const iconames = useMemo(() => [
        ['fa-facebook-f', 'https://www.facebook.com/john.weak.313371'], 
        ['fa-linkedin-in', 'https://www.linkedin.com/in/caleb-jawa-hkun-b3788b232/'], 
        ['fa-github', 'https://github.com/CalebJawaHkun']], [])
    return (
        <section id={anchor} className="">
            <div className="space-x-4">
                {iconames.map(([icon, to]) => 
                <div className="inline-block cursor-pointer"
                onClick={() => redirect(to)}>
                    <i className={`fa-brands ${icon} 
                    text-4xl`}></i>
                </div>)}
            </div>
            <div className="mt-2">
                <Smol txt="Designed with Figma, Built From Ground-up using React Vite and Tailwind."/>
                <Smol txt="Developed In Visual Studio and Deployed On Vercel."/>
                <Smol txt="2025. Caleb Jawa Hkun." c="uppercase"/>
            </div>
        </section>
    )
}
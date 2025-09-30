import { Smol, redirect } from "../Components/Subcomps";
import icons from "../assets/icons/icons_barrel";

export default function Outro({anchor=""}) {
    return (
        <section id={anchor} className="">
            <div className="space-x-2"> {icons.links.map(([icon, to, name], i) => 
                    <div className="inline-block size-8"
                    onClick={() => redirect(to)}> 
                    <img src={icon} alt={name} title={name} className="cursor-pointer"/> 
                    </div>
                )} </div>
            <div className="mt-2">
                <Smol txt="Designed with Figma, Built From Ground-up using React Vite and Tailwind."/>
                <Smol txt="Developed In Visual Studio and Deployed On Vercel."/>
                <Smol txt="2025. Caleb Jawa Hkun." c="uppercase"/>
            </div>
        </section>
    )
}
import { Smol } from "./Subcomps";
import icons from "../assets/icons/icons_barrel";

export default function Outro({anchor=""}) {
    return (
        <section id={anchor} className="flex flex-wrap justify-between">
            <div className="basis-70 flex-1 text-left">
                <div className="space-x-2"> {icons.links.map(([icon, to, name], i) => 
                    <div className="inline-block size-8"> 
                    <img src={icon} alt={name} title={name}/> 
                    </div>
                )} </div>
                <Smol txt="Designed and Built By Caleb Jawa Hkun using React and Tailwind."/>
                <Smol txt="2025. Caleb Jawa Hkun." c="uppercase"/>
            </div>
        </section>
    )
}
import { Base, Smol , Btn} from "./Subcomps";
import icons from "../assets/icons/icons_barrel";

export default function Outro() {
    return (
        <section className="flex flex-wrap justify-between">
            <div className="basis-120 flex-1">
                <Base txt="Send Me And Email!"/>
                <Base txt="If you think I can be of use, or if just a general ‘What’s Up?’, I am all Ears!"/>
                <Btn txt="Send Email" c="text-2xl"/>
            </div>
            <div className="basis-70 flex-1 text-right">
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
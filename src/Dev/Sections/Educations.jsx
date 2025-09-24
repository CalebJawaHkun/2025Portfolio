import { SessionTxt, Smol, Base, BaseHead } from "../Components/Subcomps";
import Edus from '../assets/dat/Educations.json'
import { useMemo } from "react";

export default function Educations({anchor=""}) {

    const Es = useMemo(() => Object.entries(Edus), [])
    return (
        <section
        id={anchor}
        className="md:flex h-80
        ">
            <SessionTxt txt="Educations"/>
            <div className="space-y-4
            basis-140 ml-auto
            lg:basis-180">
                {Es.map(([timeline, txts]) => 
                    <div key={timeline}
                    className="md:flex">
                        <div>
                            <Base txt={txts[0]}/>
                            <Smol txt={txts[1]}/>
                        </div>
                        <BaseHead txt={timeline} c="ml-auto font-bold"/>
                    </div>
                )}
            </div>
        </section>
    )
}
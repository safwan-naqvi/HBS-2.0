import { CardType, MinimalCardType } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function MinimalCard({ card }: { card: MinimalCardType }) {
    return (
        <div
            key={card.id}
            className="group relative select-none h-[240px] w-[250px] hover:w-[300px] hover:bg-[#54beeb] transition-all overflow-hidden bg-neutral-100 text-black p-4"
        >
            <h2 className="group-hover:text-white text-2xl font-bold tracking-tighter">{card.title}</h2>
            <p className="group-hover:text-white opacity-100 md:opacity-0 group-hover:opacity-100 text-md font-light tracking-tighter py-3">{card.description}</p>
            <IoIosArrowRoundForward className="group-hover:translate-x-3 group-hover:text-white h-10 w-10 absolute bottom-4 right-4 transition-all" />
        </div>
    );
}

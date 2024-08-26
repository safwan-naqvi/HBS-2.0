import Paragraph from "@/components/common/TextScrollEffect/Paragraph";
import Word from "@/components/common/TextScrollEffect/Words";
import Character from "@/components/common/TextScrollEffect/Character";
import Image from "next/image";
const paragraph =
  "Welcome to HashBit Studio, a dynamic hub where design innovation converges with cutting-edge development solutions. As a passionate team, we transcend the ordinary, crafting digital experiences that seamlessly blend creativity and functionality.";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col w-full max-w-screen-lg mx-auto items-center justify-center py-20 pointer-events-none">
      <h3 className="self-center mb-4 text-[#81046a]">About HBS</h3>
      <div className="flex flex-col-reverse md:flow-row items-center justify-between">
        <Character paragraph={paragraph} />
        <Image
          src={"/assets/Logo.svg"}
          alt="Hashbitstudio"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

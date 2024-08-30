import React from "react";
import { Features } from "./_components/Features";
import { LinedText } from "./_components/LinedText";
import SkewGallery from "./_components/SkewGallery";
import { GoArrowUpRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

export default function ServiceGallery() {
  const isMobile = useMediaQuery({ query: "(min-width:640px)" });
  const isNotTab = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <>
      <div className="w-full overflow-x-clip bg-black text-white">
        {isMobile && isNotTab ? "" : <LinedText />}
        <Features />

      </div>
      ;
    </>
  );
}



import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Syed Ghafran",
        username: "@syedghafran",
        body: "HashBitStudio&apos;s sleek website, SEO, and advertising strategies have significantly boosted our business growth. Highly recommended!",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050282/ghufran_4ffac4a567.webp",
    },
    {
        name: "Ahmed El-Sayed",
        username: "@ahmedelsayed",
        body: "Outstanding website, SEO, and targeted advertising from HashBitStudio have driven significant traffic and revenue for Sparco Car Care in UAE.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725048777/Syed_Al_Hadidi_6183305bb7.webp",
    },
    {
        name: "John Mitchell",
        username: "@johnmitchell",
        body: "HashBitStudio built a Next.js site with Node.js backend, SEO, and micro animations. Our online presence has never been better!",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050282/John_Mitchell_9d6e822b91.webp",
    },
    {
        name: "Priya Nair",
        username: "@priyanair",
        body: "Scalable eCommerce site using MERN stack by HashBitStudio. Their payment integration and design skills were exceptional.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050283/Priya_Nair_bc6c4e3103.webp",
    },
    {
        name: "Sarah Thompson",
        username: "@sarahthompson",
        body: "HashBitStudio transformed our WordPress site with Elementor. Micro animations added greatly to user engagement.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050282/Sarah_Thompson_c0f831b359.webp",
    },
    {
        name: "Tomás García",
        username: "@tomasgarcia",
        body: "HashBitStudio rebuilt our site with Next.js, AI-driven recommendations, and engaging design. Our brand stands out!",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050283/Tomas_Garcia_6a6028bce3.webp",
    },
    {
        name: "David Muller",
        username: "@davidmuller",
        body: "MERN stack site by HashBitStudio with SEO and secure payment integration. Robust, scalable, and top-performing.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050483/john_mulle_505319f788.webp",
    },
    {
        name: "Aiza Khan",
        username: "@aishakhan",
        body: "Next.js website with AI integration and chatbot by HashBitStudio. SEO and micro animations make our site shine.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050545/Aiza_Khan_79ed47664e.webp",
    },

    {
        name: "Maria Siddiqui",
        username: "@mariasiddiqui",
        body: "HashBitStudio transformed our WordPress site with Elementor, custom features, and SEO. Micro animations enhance UX.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050572/maria_siddique_b4b3bfbf4e.webp",
    },
    {
        name: "Fatima Al-Zahra",
        username: "@fatimaalzahra",
        body: "Next.js site redesign with chatbot and micro animations by HashBitStudio. SEO has greatly enhanced our online presence.",
        img: "https://res.cloudinary.com/do6a0yipf/image/upload/v1725050596/Fatimah_13e0333750.webp",
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-200/[.1] bg-white/[.8] shadow-lg hover:bg-white/[1] transition-all",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="relative flex h-[600px] py-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <h2 className="text-3xl w-full text-center md:text-6xl font-semibold tracking-tighter text-[#e3e3e4] drop-shadow-lg absolute top-0 left-1/2 -translate-x-1/2">What our Clients Says?</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111] dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#111] dark:from-background"></div>
        </div>
    );
}

import { RichTextContent } from "@/app/blogs/_components/RickTextContent";
import {
    fetchPortfolioBySlug,
    fetchPortfolioBySlugMetaData,
    fetchRelatedPortfolioItems,
} from "@/axios/api";
import Footer from "@/components/layout/Footer";
import { LeadForm } from "@/components/layout/LeadForm/LeadForm";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFirstLetter, truncateDescription } from "@/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaExternalLinkSquareAlt, FaQuoteLeft } from "react-icons/fa";
import RelatedProducts from "../_components/RelatedProducts";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const portfolio = await fetchPortfolioBySlugMetaData(params.slug);
    return {
        title: portfolio.title,
        description: truncateDescription(portfolio.description),
    };
}
const page = async ({ params }: any) => {
    const portfolioData = await fetchPortfolioBySlug(params.slug);
    if (!portfolioData?.data[0]) {
        notFound();
    }
    let relatedBlogs = null;
    if (portfolioData?.data[0]) {
        relatedBlogs = await fetchRelatedPortfolioItems(
            portfolioData?.data[0].attributes.portfolio.data.id,
            params.slug
        );
    }

    return (
        <div className="mt-[80px]">
            <div className="container w-full flex items-center justify-between gap-8 flex-wrap py-20 px-10 h-[60vh]">
                <div className="text-white space-y-1">
                    <p className="tracking-wide font-thin text-2xl uppercase">Project</p>
                    <h3 className="text-xl font-semibold tracking-tight">
                        {portfolioData?.data[0].attributes.portfolio.data.attributes.title}
                    </h3>
                </div>
                <WordPullUp
                    className="text-5xl text-[#ffffff] font-bold max-w-5xl tracking-tighten md:text-6xl md:leading-[5rem]"
                    words={portfolioData?.data[0].attributes.title}
                />
            </div>
            <div className="relative py-20 bg-black px-10 sm:px-16 md:px-20 lg:px-40 mt-40 min-h-[60vh]">
                <Image
                    src={portfolioData?.data[0].attributes.images.data[0].attributes.url}
                    alt="Image"
                    height={1600}
                    width={1600}
                    quality={100}
                    className="w-full h-full max-w-[1200px] max-h-screen object-cover absolute left-1/2 -translate-x-1/2 -top-1/4 lg:-top-1/3"
                />
                <div className="py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 mt-[6rem] sm:mt-[10rem] md:mt-[16rem] lg:mt-[20rem] xl:mt-[28rem]">
                    {!!portfolioData?.data[0].attributes.clientName &&
                        <div className="space-y-2">
                            <h3 className="font-light uppercase text-white/80 text-sm md:text-md tracking-wide">
                                Client
                            </h3>
                            <p className="text-lg md:text-xl tracking-tight font-semibold text-white">
                                {portfolioData?.data[0].attributes.clientName}
                            </p>
                        </div>
                    }
                    {!!portfolioData?.data[0].attributes.category &&
                        <div className="space-y-2">
                            <h3 className="font-light text-sm md:text-md uppercase text-white/80 tracking-wide">
                                Category
                            </h3>
                            <p className="text-lg md:text-xl tracking-tight font-semibold text-white">
                                {portfolioData?.data[0].attributes.category}
                            </p>
                        </div>
                    }
                    {!!portfolioData?.data[0].attributes.url &&
                        <div className="space-y-2">
                            <h3 className="font-light text-sm md:text-md uppercase text-white/80 tracking-wide">
                                Live View
                            </h3>
                            <a
                                href={portfolioData?.data[0].attributes.url}
                                className="text-lg md:text-xl flex items-center tracking-tight font-semibold text-white"
                            >
                                See Live <FaExternalLinkSquareAlt className="ml-2" />
                            </a>
                        </div>
                    }
                    {!!portfolioData?.data[0].attributes.timeline && (
                        <div className="space-y-2">
                            <h3 className="font-light text-sm md:text-md uppercase text-white/80 tracking-wide">
                                Timeline
                            </h3>
                            <p className="text-lg md:text-xl tracking-tight font-semibold text-white">
                                {portfolioData?.data[0].attributes.timeline}
                            </p>
                        </div>
                    )}

                    {!!portfolioData?.data[0].attributes.services && (
                        <div className="space-y-2">
                            <h3 className="font-light text-sm md:text-md uppercase text-white/80 tracking-wide">
                                Services We Provided
                            </h3>
                            {portfolioData?.data[0].attributes.services.services.map(
                                (service: any, index: number) => (
                                    <p key={index} className="text-lg md:text-xl tracking-tight font-semibold text-white">
                                        {service.title}
                                    </p>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-[#111111] text-white w-full py-20 px-10 md:px-20 lg:px-40 grid grid-cols-1 lg:grid-cols-6 gap-8">
                <h2 className="text-xl lg:text-2xl font-semibold tracking-tight col-span-2">
                    About The Project
                </h2>
                <div className="col-span-4">
                    <RichTextContent
                        content={portfolioData?.data[0].attributes.about}
                        customClassName="text-xl lg:text-2xl tracking-wide font-light leading-9 pb-4"
                    />
                </div>
            </div>
            <div className="h-full w-full bg-white pb-20">
                <div className="group max-h-[500px] overflow-hidden w-full">
                    <img
                        src={portfolioData?.data[0].attributes.coverimage.data.attributes.url}
                        alt="Cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                </div>
                <div className="bg-white text-black py-40 px-10 md:px-20 lg:px-40 space-y-8">
                    {!!portfolioData?.data[0].attributes.problems && (
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight col-span-2">
                                Problems
                            </h3>
                            <p className="col-span-4 text-xl lg:text-2xl tracking-tight lg:tracking-wide lg:font-light font-medium leading-9">
                                {portfolioData?.data[0].attributes.problems}
                            </p>
                        </div>
                    )}
                    {!!portfolioData?.data[0].attributes.challanges && (
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight col-span-2">
                                Challenges
                            </h3>
                            <p className="col-span-4 text-xl lg:text-2xl tracking-tight lg:tracking-wide lg:font-light font-medium leading-9">
                                {portfolioData?.data[0].attributes.challanges}
                            </p>
                        </div>
                    )}
                    {!!portfolioData?.data[0].attributes.solutions && (
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight col-span-2">
                                Solutions
                            </h3>
                            <p className="col-span-4 text-xl lg:text-2xl tracking-tight lg:tracking-wide lg:font-light font-medium leading-9">
                                {portfolioData?.data[0].attributes.solutions}
                            </p>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-10">
                        {!!portfolioData?.data[0].attributes.gallery.data && portfolioData?.data[0].attributes.gallery.data.length > 0 && portfolioData?.data[0].attributes.gallery.data.map((item: any, index: number) => (
                            <div
                                key={index}
                                className={`group overflow-hidden max-h-screen w-fullgroup ${index === 0 || index === 3 ? 'col-span-2' : 'col-span-2 md:col-span-1'}`}
                            >
                                <img
                                    src={item.attributes.url}
                                    alt={item.attributes.alternativeText || `Gallery Image ${index + 1}`}
                                    className="group-hover:scale-105 h-full w-full transition-all object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {
                    // bg-[#671ac4]
                    portfolioData?.data[0].attributes.testimonial &&
                    <div className="w-full max-w-6xl h-full mx-auto p-16 bg-[#202020] shadow-2xl">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                            <FaQuoteLeft className="text-7xl text-white shrink-0" />
                            <div className="space-y-10">
                                <p className="text-2xl lg:text-3xl font-medium tracking-tight max-w-4xl leading-9 text-white">
                                    {
                                        !!portfolioData?.data[0].attributes.testimonial && portfolioData?.data[0].attributes.testimonial.testimonial
                                    }
                                </p>
                                <div className="flex gap-4 items-center text-white">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage
                                            src={portfolioData?.data[0].attributes.testimonial.avatar.data.attributes.url}
                                            alt={portfolioData?.data[0].attributes.testimonial.avatar.data.attributes.alternativeText}
                                        />
                                        <AvatarFallback>{getFirstLetter(portfolioData?.data[0].attributes.testimonial.avatar.data.attributes.alternativeText)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-col justify-between">
                                        <p className="text-xl font-bold tracking-tight">
                                            {portfolioData?.data[0].attributes.testimonial.client}
                                        </p>
                                        <span className="tracking-tight font-light">
                                            {portfolioData?.data[0].attributes.testimonial.designation}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
                <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">
                    Have a Project Idea?
                </h2>
                <img
                    src="/assets/contact_bg.webp"
                    alt="Contact Image"
                    className="object-cover absolute bottom-0 left-0"
                />
                <div className="mt-10 md:mt-4 z-10">
                    <LeadForm />
                </div>
            </div>
            {
                !!relatedBlogs && <RelatedProducts project={relatedBlogs} />
            }
            <Footer />
        </div>
    );
};

export default page;

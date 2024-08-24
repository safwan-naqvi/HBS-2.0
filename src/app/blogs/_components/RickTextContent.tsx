// RichTextContent.tsx
import { FC, ReactNode } from 'react';
import { RichTextContentProps } from '@/types';
import { cn } from '@/lib/utils';
import { FaArrowAltCircleRight } from "react-icons/fa";

export const RichTextContent: FC<RichTextContentProps> = ({ content }) => {
    if (!content) return null;

    const renderChildren = (children: any[]): ReactNode => {
        return children.map((child, index) => {
            if (child.type === 'text') {
                return <span key={index}>{child.text}</span>;
            }
            // Add more handling for nested structures if necessary
            return null;
        });
    };

    const renderContent = (content: any[]): ReactNode => {
        return content.map((block, index) => {
            switch (block.type) {
                case 'heading':
                    const headingLevel = `h${block.level}`
                    const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;
                    return <HeadingTag key={index} className={cn(`${headingLevel === "h1" ? "text-3xl lg:text-5xl" : headingLevel === "h2" ? "text-2xl lg:text-4xl" : headingLevel === "h3" ? "text-xl lg:text-2xl" : headingLevel === "h4" ? "text-lg lg:text-2xl" : headingLevel === "h5" ? "text-md lg:text-xl" : "text-md lg:text-lg"}`, "py-4 font-semibold tracking-tight")}>{renderChildren(block.children)}</HeadingTag>;

                case 'paragraph':
                    return <p key={index} className='text-md tracking-tight'>{renderChildren(block.children)}</p>;

                case 'list':
                    const ListTag = block.format === 'unordered' ? 'ul' : 'ol';
                    return (
                        <ListTag key={index} className='py-2 ml-4 flex items-start gap-2 mt-1'>
                            {ListTag === 'ul' ? <FaArrowAltCircleRight className='h-7 w-7 text-[#bc274d] shrink-0' /> : ""}
                            {block.children.map((listItem: any, listItemIndex: number) => (
                                <li key={listItemIndex} className='font-light tracking-tight text-md'>{renderChildren(listItem.children)}</li>
                            ))}
                        </ListTag>
                    );

                case 'code':
                    return (
                        <pre key={index}>
                            <code>{renderChildren(block.children)}</code>
                        </pre>
                    );

                case 'blockquote':
                    return <blockquote key={index}>{renderChildren(block.children)}</blockquote>;

                case 'image':
                    return (
                        <div key={index}>
                            <img src={block.image.url} alt={block.image.alternativeText || 'image'} className='w-full h-[600px] object-cover my-2 rounded-lg' />
                            {block.image.caption && <p>{block.image.caption}</p>}
                        </div>
                    );

                // Handle more cases if necessary

                default:
                    return null;
            }
        });
    };

    return <div>{renderContent(content)}</div>;
};

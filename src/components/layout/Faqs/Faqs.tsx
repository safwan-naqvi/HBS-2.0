import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type FaqProps = {
    id: string;
    question: string;
    answer: string;
}

interface FaqProp {
    Faq: FaqProps[]
}


export function Faqs({ Faq }: FaqProp) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                Faq.map((item) => {
                    return (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    );
}

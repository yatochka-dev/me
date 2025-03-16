"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMessages, useTranslations } from "next-intl";

// Accept dictionary as a prop, don't import it
export default function FaqSection() {
  const containerRef = useRef(null);
  const t = useTranslations("faq");
  const messages = useMessages();

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(messages.faq.items);

  return (
    <section id="faq" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
        </div>

        <motion.div
          ref={containerRef}
          className="mx-auto max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {keys.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {t(`items.${item}.question`)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(`items.${item}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

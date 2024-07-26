import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Calisma from "./Calisma";
import { data } from "@/assets/data";
function Calismalar() {
  return (
    <Accordion type="single" collapsible={true} className="w-full">
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={"Accordion_" + index.toString()}
            value={`item-` + index.toString()}
          >
            <AccordionTrigger className="text-black text-2xl pl-10">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="p-0 mb-2 py-2">
              <div className="w-full">
                <Calisma
                  key={"Calisma_" + index.toString()}
                  href={item.href}
                  uri={item.uri}
                  description={item.description}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default Calismalar;

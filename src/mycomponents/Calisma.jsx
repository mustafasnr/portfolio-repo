import React from "react";
import { Separator } from "@/components/ui/separator";
function Calisma({ href, uri, description }) {
  console.log(description);
  return (
    <div className="w-full h-full px-10 py-2 flex flex-row gap-x-10 justify-start items-center">
      <div class="relative max-w-48 mx-auto ml-10">
        <Separator
          orientation="vertical"
          className="absolute flex-col flex flex-1 -right-10 top-0 w-[1px] bg-black"
        />
        <a target="_blank" href={href}>
          <img
            src={uri}
            alt="Screenshot"
            class="w-full h-full object-contain"
          />
        </a>
      </div>

      <div className=" flex flex-1 justify-center items-center">
        <a
          target="_blank"
          href={href}
          className=" text-center mx-10 text-xl text-black hover:underline"
        >
          <p>
            {description}
            <br />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Calisma;

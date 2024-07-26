import React from "react";
import ProfilResmi from "./mycomponents/ProfilResmi";
import Calismalar from "./mycomponents/CalismaAccordionItem";
import { Separator } from "@/components/ui/separator";
import { mainText } from "./assets/data";
import MyLinks from "./mycomponents/MyLinks";

function App() {
  return (
    <div className="w-full h-full flex flex-1 flex-col items-center gap-y-10 pt-16 overflow-x-hidden">
      <ProfilResmi
        className={
          "w-32 h-32 rounded-xl hover:cursor-pointer shadow-sm shadow-black/80"
        }
      />
      <MyLinks />
      <Separator
        orientation="horizontal"
        className="bg-black w-[95%] h-[0.5px]"
      />
      <div className="text-xl px-20 my-5 text-center text-black ">
        <p>{mainText}</p>
      </div>
      <Separator
        orientation="horizontal"
        className="bg-black w-[95%] h-[0.5px]"
      />
      <p className="w-full px-20 text-center text-3xl text-black hover:underline">
        Yaptığım Çalışmalar
      </p>
      <div className="w-full px-20 pb-16">
        <Calismalar />
      </div>
    </div>
  );
}
export default App;

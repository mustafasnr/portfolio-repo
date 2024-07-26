import React, { useState, useEffect } from "react";
import ProfilResmi from "./mycomponents/ProfilResmi";
import Calismalar from "./mycomponents/CalismaAccordionItem";
import { Separator } from "@/components/ui/separator";
import { mainText } from "./assets/data";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-1 flex-col items-center gap-y-10 pt-20 overflow-x-hidden">
      <ProfilResmi
        className={
          `transition-transform duration-500 ${
            isAnimating ? " scale-110 " : " scale-100 "
          }` +
          "w-32 h-32 rounded-xl hover:cursor-pointer shadow-2xl shadow-black/80"
        }
      />
      <Separator
        orientation="horizontal"
        className="bg-black w-[95%] h-[0.5px]"
      />
      <div className="text-xl px-20 text-center text-black ">
        <p>{mainText}</p>
      </div>
      <Separator
        orientation="horizontal"
        className="bg-black w-[95%] h-[0.5px]"
      />
      <p className="w-full px-20 text-center text-3xl text-black hover:underline">
        Yaptığım Çalışmalar
      </p>
      <div className="w-full px-20 pb-20">
        <Calismalar />
      </div>
    </div>
  );
}
export default App;

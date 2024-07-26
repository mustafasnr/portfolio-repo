import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
function ProfilResmi({ className }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger hidden={false}>
          <Avatar className={className}>
            <AvatarImage src="./edited_vesika.jpg" alt="ben" />
          </Avatar>
        </TooltipTrigger>
        <TooltipContent
          className={
            "bg-black border-black text-white flex flex-row gap-x-4 px-4 py-2.5 justify-between items-center"
          }
        >
          <a target="_blank" href="https://github.com/mustafasnr">
            <Avatar
              className={
                "w-10 h-10 hover:scale-110 bg-white transition-transform duration-150"
              }
            >
              <AvatarImage
                src="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg"
                alt="github_link"
              />
            </Avatar>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/mustafasoner/">
            <Avatar
              className={
                "w-10 h-10 hover:scale-110 rounded-sm transition-transform duration-150"
              }
            >
              <AvatarImage
                src="https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
                alt="linkedin_link"
              />
            </Avatar>
          </a>

          <a target="_blank" href="https://www.kaggle.com/mustafasoner">
            <Avatar
              className={
                "w-10 h-10 scale-90 hover:scale-100 rounded-sm bg-white transition-transform duration-150"
              }
            >
              <AvatarImage
                src="https://www.kaggle.com/static/images/favicon.ico"
                alt="kaggle_link"
              />
            </Avatar>
          </a>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ProfilResmi;

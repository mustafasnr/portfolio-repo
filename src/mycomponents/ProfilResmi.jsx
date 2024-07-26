import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function ProfilResmi({ className }) {
  return (
    <Avatar className={className}>
      <AvatarImage src="./edited_vesika.jpg" alt="ben" />
    </Avatar>
  );
}

export default ProfilResmi;

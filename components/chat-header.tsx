"use client";

import { Ai, Message } from "@prisma/client";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface ChatHeaderProps {
  ai: Ai & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export const ChatHeader = ({ ai }: ChatHeaderProps) => {
  return (
    <div className="flex w-full justify-between items-center border-b border-primary/1 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

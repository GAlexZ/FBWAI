"use client";

import { Ai, Message } from "@prisma/client";
import { Button } from "./ui/button";
import { ChevronLeft, MessageSquare, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { BotAvatar } from "./bot-avatar";
import { useUser } from "@clerk/nextjs";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface ChatHeaderProps {
  ai: Ai & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export const ChatHeader = ({ ai }: ChatHeaderProps) => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/1 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={ai.src} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">{ai.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessageSquare className="w-3 h-3 mr-1" />
              {ai._count.messages}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Created by {ai.userName}
          </p>
        </div>
      </div>
      {user?.id === ai.userId && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon">
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      )}
    </div>
  );
};

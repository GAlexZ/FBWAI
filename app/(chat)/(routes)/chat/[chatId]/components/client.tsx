"use client";

import { ChatHeader } from "@/components/chat-header";
import { Ai, Message } from "@prisma/client";

interface ChatClientProps {
  ai: Ai & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

export const ChatClient = ({ ai }: ChatClientProps) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader ai={ai} />
    </div>
  );
};

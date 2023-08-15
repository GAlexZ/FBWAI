import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChatClient } from "./components/client";

interface ChatidPageProps {
  params: {
    chatId: string;
  };
}

const ChatIdPage = async ({ params }: ChatidPageProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirectToSignIn();
  }

  const ai = await prismadb.ai.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  if (!ai) {
    return redirect("/dashboard");
  }

  return <ChatClient ai={ai} />;
};

export default ChatIdPage;

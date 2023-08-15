import prismadb from "@/lib/prismadb";
import { AiForm } from "./components/ai-form";

interface AiIdPageProps {
  params: {
    aiId: string;
  };
}

const AiIdPage = async ({ params }: AiIdPageProps) => {
  //TODO: Check subscition

  const ai = await prismadb.ai.findUnique({
    where: {
      id: params.aiId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <AiForm initialData={ai} categories={categories} />;
};

export default AiIdPage;

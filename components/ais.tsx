import { Ai } from "@prisma/client";
import Image from "next/image";

interface AiProps {
  data: (Ai & {
    _count: {
      messages: number;
    };
  })[];
}

export const AIs = ({ data }: AiProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" alt="Empty" src="/empty.png" />
        </div>
      </div>
    );
  }
  return <div>AIs</div>;
};

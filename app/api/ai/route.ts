import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { src, name, description, instructions, categoryId } = body;

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!src || !name || !description || !instructions || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    //TODO: Check from subscription

    const ai = await prismadb.ai.create({
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
      },
    });
    return NextResponse.json(ai);
  } catch (error) {
    console.log(error + "Error 4");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

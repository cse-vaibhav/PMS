import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/Database";

export async function GET(req: NextRequest) {
  const projects = await prisma.project.findMany({
    where: {
      parent_project: { equals: null }
    }
  });
  console.log(projects);
  return NextResponse.json(projects, {
    headers: { "Content-Type": "application/json" }
  });
}

import { NextResponse } from "next/server";
import { ServiceDTO } from "@/types";

const data: ServiceDTO[] = [
  {
    id: "oil",
    name: "Synthetic Oil Change",
    duration: 3600,
  },
  {
    id: "tire",
    name: "Tire Rotation & Inspection",
    duration: 7200,
  },
  {
    id: "detail",
    name: "Express Auto Detailing",
    duration: 4800,
  },
];

export async function GET(request: Request) {
  return NextResponse.json(data);
}

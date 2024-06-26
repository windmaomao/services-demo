import { NextResponse } from "next/server";
import { ServiceDTO } from "@/types";

const available = [
  "Monday, May 5th 08:00 AM",
  "Monday, May 5th 10:00 AM",
  "Tuesday, May 6th 02:00 PM",
];

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

import { NextResponse } from "next/server";

const data = [
  {
    id: "oil",
    title: "Synthetic Oil Change",
    available: [
      "Monday, May 5th 08:00 AM",
      "Monday, May 5th 10:00 AM",
      "Tuesday, May 6th 02:00 PM",
    ],
  },
  {
    id: "tire",
    title: "Tire Rotation & Inspection",
    available: [
      "Monday, May 5th 08:00 AM",
      "Monday, May 5th 10:00 AM",
      "Tuesday, May 6th 02:00 PM",
    ],
  },
  {
    id: "detail",
    title: "Express Auto Detailing",
    available: [
      "Monday, May 5th 08:00 AM",
      "Monday, May 5th 10:00 AM",
      "Tuesday, May 6th 02:00 PM",
    ],
  },
];

export async function GET(request: Request) {
  return NextResponse.json(data);
}

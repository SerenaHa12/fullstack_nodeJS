import { NextResponse } from "next/server";
export const nextApiURL = `https://api-pages.vercel.app/api/v1/pages`;
export async function GET() {
  const response = await fetch(nextApiURL);
  const data = await response.json();
  console.log(data);
  return NextResponse.json(
    {
      status: "success",
      data: data,
    },
    {
      status: 404,
    },
  );
}
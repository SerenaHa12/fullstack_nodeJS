import { NextResponse } from "next/server";
export const nextApiURL = `https://api-pages.vercel.app/api/v1/pages`;
export async function GET() {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const response = await fetch(`${nextApiURL}/${id}`);
  const data = await response.json();
  return NextResponse.json(
    {
      status: "success",
      data: data,
    },
    {
      status: 404,
    }
  );
}

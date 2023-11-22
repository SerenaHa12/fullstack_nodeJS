import { NextResponse } from "next/server";

const isLogin = false;

export function middleware(request) {
  if (isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

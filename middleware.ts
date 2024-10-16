import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};

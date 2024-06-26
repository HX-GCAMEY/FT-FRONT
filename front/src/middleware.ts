import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  const token = null;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/protected",
};

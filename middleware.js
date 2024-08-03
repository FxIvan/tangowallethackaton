import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const authMiddleware = withAuth(
  function onSuccess(req) {
    return NextResponse.next();
  },
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

export default function middleware(req) {
  try {
    //const privatePathnameRegex = RegExp(`^/protect/.*$`, "i");
    const privatePathnameRegex = RegExp(`^/protectTEST/.*$`, "i");

    // Check if the current route is a private page
    const isPrivatePage = privatePathnameRegex.test(req.nextUrl.pathname);

    if (isPrivatePage) {
      console.log("Private page detected, running authMiddleware");
      return authMiddleware(req);
    } else {
      console.log("Public page detected, continuing");
      return NextResponse.next();
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

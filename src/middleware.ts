import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAppForUser } from "./lib/serverApp";

export async function middleware(request: NextRequest) {
    // const { currentUser } = await getAuthenticatedAppForUser();
    // if (!currentUser) {
    //     const url = request.nextUrl.clone();
    //     url.pathname = "/login";
    //     return NextResponse.rewrite(url);
    // }
}  
import {fetchDeepl} from "@/apis/deeplApi";
import {NextRequest, NextResponse} from "next/server";

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: NextRequest,
                          response: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const resp = await fetchDeepl(
    {text: searchParams.get("text"), targetLang: searchParams.get("targetLang")});
  return NextResponse.json(resp, {status: 200});
}


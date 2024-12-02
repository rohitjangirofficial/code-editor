import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { code, language, version } = await req.json();

    if (!code || !version || !language) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data } = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language,
        version,
        files: [
          {
            content: code,
          },
        ],
      }
    );

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal Server Error", errObj: error },
      { status: 500 }
    );
  }
}

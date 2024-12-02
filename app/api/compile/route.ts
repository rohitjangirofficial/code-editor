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

    // const { data } = await axios.post("https://api.jdoodle.com/v1/execute", {
    //   script: code,
    //   language,
    //   versionIndex,
    //   clientId: "8b0c23e273d85f44482e6bd9e3fe668b",
    //   clientSecret:
    //     "8d6db4e9ffb89db13ed6a983b1766b19ef83c68a6ef07fd98d9cadfea4c7be1a",
    // });

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

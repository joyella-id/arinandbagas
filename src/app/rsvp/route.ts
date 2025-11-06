import { createClient } from "@supabase/supabase-js";
import { Database } from "../../supabase/supabase";
import { NextRequest, NextResponse } from "next/server";

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  process.env.SupabaseProjectUrl || "",
  process.env.SupabaseAPIKey || ""
);

export async function GET(request: NextRequest) {
  let { data: rsvp, error } = await supabase
    .from("rsvp")
    .select("*")
    .order("created_at", { ascending: false });
  if (!error) {
    const response = NextResponse.json(rsvp, { status: 200 });
    response.headers.append("Access-Control-Allow-Origin", "*");
    response.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.append("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }

  const response = NextResponse.json(error, { status: 400 });
  response.headers.append("Access-Control-Allow-Origin", "*");
  response.headers.append(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.append("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { data, error } = await supabase.from("rsvp").insert([body]).select();

  if (!error) {
    const response = NextResponse.json(data, { status: 200 });
    response.headers.append("Access-Control-Allow-Origin", "*");
    response.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.append("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
  const response = NextResponse.json(error, { status: 400 });
  response.headers.append("Access-Control-Allow-Origin", "*");
  response.headers.append(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.append("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

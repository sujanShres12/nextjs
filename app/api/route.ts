"use server"
export async function GET() {
  return Response.json({ title: "Hello" });
}

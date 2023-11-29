import city from "@/data/tinh_tp.json";

export function GET() {
  return Response.json(Object.values(city));
}

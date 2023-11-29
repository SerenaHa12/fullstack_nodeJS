import district from "@/data/quan_huyen.json";

export function GET(request) {
  const city_id = request.nextUrl.searchParams.get("city_id");
  if (!city_id) {
    return Response.json({ error: "error" });
  }
  let districtArr = Object.values(district);
  districtArr = districtArr.filter((item) => {
    return city_id === item.parent_code;
  });
  return Response.json(districtArr);
}

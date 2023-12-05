import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      {session && (
        <div className="py-12 xl:py-24 w-full h-[84vh] relative overflow-hidden">
          <div className="container mx-auto">Log in</div>
        </div>
      )}
      <div className="py-12 xl:py-24 w-full h-[84vh] relative overflow-hidden">
        <div className="container mx-auto">Not login</div>
      </div>
    </>
  );
}

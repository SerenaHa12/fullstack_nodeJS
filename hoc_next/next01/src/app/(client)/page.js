"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleGoAdmin = () => {
    router.push("/admin");
  };
  return (
    <div className="home">
      <h1>Trang chủ F8</h1>
      <h3>
        <Link href="/san-pham">Danh sách sản phẩm</Link>
      </h3>
      <button onClick={handleGoAdmin}>Vào quản trị</button>
    </div>
  );
};

export default Home;

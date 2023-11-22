"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ProductList = ({ searchParams }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [form, setForm] = useState({
    status: "all",
    keywords: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    const url = pathname + "/?" + new URLSearchParams(form).toString();
    router.push(url);
    // router.push(pathname + "?status=inactive&keywords=abc");
  };
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <h3>Trạng thái: {searchParams.status}</h3>
      <h3>Từ khóa: {searchParams.keywords}</h3>
      <form action="" onSubmit={handleSubmit}>
        <select onChange={handleChange} name="status">
          <option value="all">Tất cả</option>
          <option value="active">Kích hoạt</option>
          <option value="unactive">Chưa kích hoạt</option>
        </select>
        <input
          type="search"
          placeholder="Nhập từ khóa tìm kiếm..."
          name="keywords"
          onChange={handleChange}
        />
        <button>Lọc</button>
      </form>
    </div>
  );
};

export default ProductList;

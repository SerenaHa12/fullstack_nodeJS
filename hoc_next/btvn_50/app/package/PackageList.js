import React from "react";
import { NEXT_API_URL } from "@/constant/constant";
import Image from "next/image";

const getList = async (id) => {
  const response = await fetch(
    `https://api-pages.vercel.app/api/v1/pages/${id}`
  );
  const data = await response.json();
  return data;
};

const PackageList = async ({ params }) => {
  const data = await getList(`/1`);
  console.log(data);
  
  return (
    <div className="p-4 rounded-sm">
      <>
        <div className="img">
          <Image src={data.destinationBox.src} width={100} height={100} alt="hi" />
        </div>
        <div className="content">
          <h3>{data.home.name}</h3>
          <p>{data.home.textcontent}</p>
        </div>
      </>
    </div>
  );
};

export default PackageList;

"use client";

import { CgProfile } from "react-icons/cg";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

export default function LogoBar() {
  
  const [data, setData] = useState("Not Login");

  const getUserName = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <>
      <section className="flex flex-row justify-between items-center bg-slate-600 rounded">
        <h1 className="flex flex-row  text-slate-400 text-xl sm:text-xl md:text-2xl lg:text-3xl mx-2 font-semibold">
          <span className="uppercase">
            web<span className="text-orange-600">libery</span>
          </span>
        </h1>
        <Link href={"/profile"}>
          <div className="flex flex-row items-center gap-2 px-4 text-slate-200 text-xl p-2 md:text-2xl">
            <CgProfile /><span>{
            
            }</span>
          </div>
        </Link>
      </section>
    </>
  );
}

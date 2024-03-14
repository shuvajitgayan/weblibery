"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };

  return (
    <>
      {/* <Herosection /> */}
      <div className="background h-[250px] sm:h-[350px] lg:h-[500px] w-full bg-no-repeat bg-cover flex flex-col mt-1 rounded">
        <div className=" mx-auto text-5xl font-extrabold uppercase text-slate-200 mt-6">
          web<span className="text-orange-600">library</span>
        </div>
        <div className="popup "></div>
      </div>

      {/* profile section */}
      <div className="flex flex-col items-center justify-center py-2 ">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <h2 className="p-1 rounded bg-green-500">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <hr />
        <button
          onClick={logout}
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          GetUser Details
        </button>
      </div>
    </>
  );
}

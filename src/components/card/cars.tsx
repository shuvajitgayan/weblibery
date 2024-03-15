"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Books_data from "../../data/books_data.json"
import Link from "next/link";

interface Books{
  
    id: number,
    title: string,
    description: string,
    price: number,
    instructor: string,
    image_url: string,
    website_link: string,
    isFeatured: boolean
  
}

export default function Books() {
  const Regular_Uses = Books_data.books.filter((books:Books) => books.isFeatured)

  return (
    <div className="py-10 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-stone-300 font-semibold tracking-wide uppercase">Regular Uses</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">Learn with our team</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center text-slate-50">
          {Regular_Uses.map((books:Books)=>(
            <div className="flex justify-center" key={books.id}>
              <BackgroundGradient>test</BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link className="p-2 bg-slate-400 text-white text-xs md:text-2xl sm:text-xl lg:text-4xl rounded"
        href={'https://www.overdrive.com/apps/libby'} >
          View All
        </Link>
      </div>
      
    </div>
  );
}

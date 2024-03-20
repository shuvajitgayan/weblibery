"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Books_data from "../../data/books_data.json"
import Link from "next/link";
import ghost from '../../../public/ghost.jpg'

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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center text-slate-50">
          {Regular_Uses.map((books:Books)=>(
            <div className="flex justify-center" key={books.id}>
              <BackgroundGradient className="flex flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900 h-full w-auto text-slate-700">
                <div className="p-2 sm:p-6 flex flex-col items-center text-center flex-grow ">
                  <Image className=""
                  height={100}
                  width={100}
                  src={ghost}
                  alt="book image"/>

                  <p className="mt-2 text-xl">{books.title}</p>
                  <p className="mt-2">{books.instructor}</p>
                  <p className="mt-2">{books.description}</p>
                  <Link 
                  className="p-1 bg-stone-400 text-blue-500 hover:bg-slate-100 rounded mt-3"
                  href={books.website_link}>
                     Read more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link className="p-2 bg-slate-400 text-white text-xs rounded"
        href={'https://www.overdrive.com/apps/libby'} >
          View All
        </Link>
      </div>
      
    </div>
  );
}

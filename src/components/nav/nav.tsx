import Image from "next/image";
import { GiBlackBook } from "react-icons/gi";

export default function Herosection() {
  return (
    <>
      {/* <Herosection /> */}
      <div className="background h-[250px] sm:h-[350px] lg:h-[500px]  w-full bg-no-repeat bg-cover flex flex-col mt-1 rounded">
        <div className="flex flex-col gap-6 mt-4 md:mt-28 sm:mt-24">
          <h1 className="mx-auto text-5xl md:text-[100px] font-extrabold uppercase text-slate-200 mt-6">
            web<span className="text-orange-600">library</span>
          </h1>
          

          <div className="flex flex-row mx-auto gap-10 mt-10">
            
            <div className="flex flex-row gap-2">
              <div>
                <input className="text-xl rounded text-center"
                type="text" 
                placeholder="Search Book"/>
                
              </div>
              <div className="flex flex-row ">
                <button className="" type="submit">
                  <GiBlackBook className="text-xl h-7 w-14 bg-slate-400 text-stone-900 hover:text-blue-300 rounded "/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

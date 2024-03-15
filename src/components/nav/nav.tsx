import Image from "next/image";
import { GiBlackBook } from "react-icons/gi";

export default function Nav() {
  return (
    <>
      {/* <Herosection /> */}
      <div className="background h-[250px] sm:h-[350px] lg:h-[500px] w-full bg-no-repeat bg-cover flex flex-col mt-1 rounded">
        <div className="flex flex-col gap-6 mt-4">
          <h1 className="mx-auto text-5xl font-extrabold uppercase text-slate-200 mt-6">
            web<span className="text-orange-600">library</span>
          </h1>
          <div>
            <GiBlackBook />
          </div>
          
          <div className="flex flex-row mx-auto gap-10">
            
            <div className="flex flex-row gap-2">
              <div>
                <input type="text" />
              </div>
            <div>
                <button type="submit">
                  <GiBlackBook />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

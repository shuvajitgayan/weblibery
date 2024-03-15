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
            <Image
              className="rounded-full"
              src={
                "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.webp?b=1&s=170667a&w=0&k=20&c=TRED57BZuROoCEP9kR85pW38PLz32onmM8106OoXeGQ="
              }
              alt="motivation"
              height={100}
              width={100}
            />
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
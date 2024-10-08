"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import data from "../../public/data.json";
import Vaultinfo from "../component/Vaultinfo";

import Left from "../component/Leftdiv";

import Position from "../component/Position";
import LiquidityMiningProgram from "../component/LiquiditiMiningProgram";

import { MdKeyboardArrowLeft } from "react-icons/md";


const DetailsPage = () => {
  const { id } = useParams();
  const item = data.find((d) => d.id === id);

  return (
    <main className="w-[80%] mx-auto mt-32">
      <div>
        <Link href="/">
          <button className="bg-[#1E212A] hover:bg-[#2b2E37] w-fit px-6 py-3 rounded-xl text-left flex items-center gap-3 mt-4">
            <MdKeyboardArrowLeft /> Back to all Vaults
          </button>
        </Link>
        <Vaultinfo data={item} />
        <div className="w-full flex flex-row items-start justify-between my-10">
          <div className="w-[60%]">
            <Left data = {item} />
          </div>
          <div className="flex flex-col w-[39%] gap-2">
            <Position />
            <LiquidityMiningProgram />
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default DetailsPage;

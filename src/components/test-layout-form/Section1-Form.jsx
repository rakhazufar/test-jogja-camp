import React from "react";
import { FaPlus } from "react-icons/fa6";
import { LuDownload, LuUpload } from "react-icons/lu";

function Section1Form() {
  return (
    <div className="w-full flex flex-wrap gap-5 h-12">
      <div className="lg:w-[35%] md:w-full w-full h-12 flex justify-between md:justify-start md:space-x-4">
        <div className=" md:flex-1">
          <button class="text-gray-300 hover:bg-gray-900 h-12 bg-gray-800 font-medium py-2 px-4 rounded-md flex flex-row items-center justify-center gap-2">
            <FaPlus />
            Tambah
          </button>
        </div>
        <button class="bg-gray-300 hover:bg-gray-400 h-12 text-gray-800 font-medium py-2 px-4 rounded-md flex flex-row items-center justify-center gap-2 md:self-end">
          <LuDownload />
          Import
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 h-12 text-gray-800 font-medium py-2 px-4 rounded-md flex flex-row items-center justify-center gap-2 md:self-end">
          <LuUpload />
          Export
        </button>
      </div>
      <div className="lg:w-[62%] md:w-full h-12 flex flex-wrap justify-between gap-4 md:gap-0">
        <input
          type="text"
          class="h-12 md:w-[70%] w-full  pr-8 pl-5 rounded z-0 focus:shadow border-[1px] focus:outline-none"
          placeholder="Search"
        />
        <div className="md:w-[28%] w-full">
          <select
            id="countries"
            className="h-12 px-2 w-[100%] rounded border-[1px] custom-select"
          >
            <option selected>2020</option>
            <option value="US">Pilihan 1</option>
            <option value="CA">Pilihan 2</option>
            <option value="FR">Pilihan 3</option>
            <option value="DE">Pilihan 4</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Section1Form;

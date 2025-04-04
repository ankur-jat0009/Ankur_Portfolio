"use client";
import React from "react";
import { MdEngineering } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <section className="text-gray-400 rounded-xl bg-gray-900 body-font sm:mx-28">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <MdEngineering className="h-7 w-7" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-medium mb-3 tracking-wider">
                  Bachelor Of Engineering
                </h2>
                <div>
                  <p>@ NITK, Surathkal</p>
                  <p className="mt-2">2022 - 2026</p>
                  <h3 className="mt-3 text-lg font-medium text-white tracking-wider">
                  
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <FaUserPlus className="h-6 w-6" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-medium mb-3 tracking-wider">
                  12th Standard
                </h2>
                <div>
                  <p>@ O.N.S. Sr Sec School, Kotputli</p>
                  <p className="mt-2">2020 - 2022</p>
                  <h3 className="mt-3 text-lg font-medium text-white tracking-wider">
                    88 %
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <FaUser className="h-6 w-6" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-xl title-font font-medium mb-3 tracking-wider">
                  10th Standard
                </h2>
                <div>
                  <p>@ The Amar Jyoti School, Kotputli</p>
                  <p className="mt-2">2019 - 2020</p>
                  <h3 className="mt-3 text-lg font-medium text-white tracking-wider">
                    80 %
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

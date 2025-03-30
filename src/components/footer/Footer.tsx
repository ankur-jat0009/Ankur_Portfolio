import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font ">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-green-400/40 bg-opacity-50">
              ANKUR{" "}
              <span className="space-y-0 border-b-2 border-b-green-400">
                JAT
              </span>{" "}
            </span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2025 By Developer —
            <a
              href="https://x.com/ANKURJAT15"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ankur-jat
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
           

            <Link href={"https://www.linkedin.com/in/ankur-jat/"} target="_blank">
              <span className="text-white bg-slate-500 p-2  rounded-full">
                Connect With Me !
              </span>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-stone-800 px-8 py-5 font-bold">
      <div className="flex items-center">
        <Link
          href={"/"}
          className="font-bold p-3 px-6 bg-white rounded-sm transform hover:scale-120 transition duration-300"
        >
          Home
        </Link>
      </div>

      <div className="flex mx-auto">
        <p className="bg-stone-800 italic text-white p-3 text-4xl rounded-sm">
          Schedule Optimizer
        </p>
      </div>

      <div className="flex items-center">
        <Link
          href={"/addTopic"}
          className="bg-green-500 text-white p-3 rounded-sm"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

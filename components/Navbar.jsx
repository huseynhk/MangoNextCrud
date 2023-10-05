import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-violet-500 px-10 py-3 rounded-md">
      <Link href={"/"} className="text-gray-200 font-bold">Home</Link>
      <Link href={"/addTittle"} className="bg-violet-300 py-2 px-6 rounded-md">Add</Link>
    </nav>
  );
};

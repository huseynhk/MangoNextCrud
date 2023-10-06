import React from "react";
import { RemoveTittle } from "@/components/RemoveTittle";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";

const getTittles = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/topics");

    if (response.status !== 200) {
      throw new Error("Failed to fetch topics");
    }
    return response.data;
  } catch (error) {
    console.error("Error loading topics:", error);
  }
};




export const GetTittle = async () => {
  const { topics } = await getTittles();

  return (
    <>
      {topics.map((topic) => (
        <div  key={topic._id}  className="p-8 border-4 border-slate-300 my-6 flex justify-between gap-5 items-start rounded-md">
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div>
            <div className="flex gap-2">
              <RemoveTittle id={topic._id} />
              <span className="text-green-500">
                <Link href={`/editTittle/${topic._id}`}>
                  <HiPencilAlt size={32} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

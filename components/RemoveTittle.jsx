"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";

export const RemoveTittle = ({ id }) => {
  const router = useRouter();

  const removeTittles = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/topics?id=${id}`
        );
          console.log("delete",response)
        if (response.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.error("Error deleting topic:", error);
      }
    }
  };

  return (
    <button onClick={removeTittles} className="text-red-500">
      <HiOutlineTrash size={32} />
    </button>
  );
};

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const EditTittleForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/topics/${id}`,
        { newTitle, newDescription }
      );
      if (response.status !== 200) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-400 px-8 py-2"
          type="text"
          placeholder="Topic Title"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />

        <input
          className="border border-slate-400 px-8 py-2"
          type="text"
          placeholder="Topic Description"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />

        <button className="bg-green-500 font-bold text-gray-100 py-2 px-8 w-fit rounded-sm ml-72 mt-2">
          Update
        </button>
      </form>
    </div>
  );
};

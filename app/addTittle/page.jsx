"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddTittle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("Title and Description are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/topics", {
        title,
        description,
      });
      if (response.status !== 200) {
        router.push("/");
        router.refresh();

      } else {
        throw new Error("Failed to create a topic");
      }
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
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          className="border border-slate-400 px-8 py-2"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-400 font-bold text-gray-100 py-2 px-8 w-fit rounded-sm ml-72 mt-2"
        >
          Add Tittle
        </button>
      </form>
    </div>
  );
}

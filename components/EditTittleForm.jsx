import React from "react";

export const EditTittleForm = () => {
  return (
    <div className="mt-4">
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-400 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />

        <input
          className="border border-slate-400 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />

        <button className="bg-green-500 font-bold text-gray-100 py-2 px-8 w-fit rounded-sm ml-72 mt-2">
          Update
        </button>
      </form>
    </div>
  );
};

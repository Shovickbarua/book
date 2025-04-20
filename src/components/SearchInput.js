"use client";
import React from "react";

const SearchInput = ({ query, onChange, onSearch }) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;

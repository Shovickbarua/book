"use client";
import React, { useState } from "react";
import BookApi from "@/api/BookApi";
import SearchInput from "@/components/SearchInput";
import BookList from "@/components/BookList";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    const res = await BookApi.search(query);
      if (res.success) {
        setBooks(res.data.docs);
      } else {
        setError(res.message);
        setBooks([]);
      }
    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Open Library Book Search
      </h1>

      <SearchInput query={query} onChange={setQuery} onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <BookList books={books} />
    </main>
  );
};

export default HomePage;

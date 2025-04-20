"use client";
import BookApi from "@/api/BookApi";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const getBook = async () => {
        const res = await BookApi.search(query);
        if (res.success) {
            // console.log('first', res);
            setData(res.data.docs); 
        }
    };
    return (
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="border-2 border-gray-300 rounded-md p-2 mb-4 mr-2"
            />
            <button
                onClick={getBook}
                className="bg-blue-500 text-white rounded-md p-2 mb-4"
            >
                Search
            </button>

            <table className="table-auto w-full border mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Author</th>
                        <th className="border px-4 py-2">First Published</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((book, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{book.title}</td>
                                <td className="border px-4 py-2">{book.author_name?.[0] || "N/A"}</td>
                                <td className="border px-4 py-2">{book.first_publish_year || "N/A"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="border px-4 py-2" colSpan="3">
                                No results found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Page;

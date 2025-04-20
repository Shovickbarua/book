import React from "react";

const BookList = ({ books }) => {
  if (!books.length) {
    return (
      <p className="text-center text-gray-500 mt-4">No results found.</p>
    );
  }

  return (
    <div className="mt-4">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.key}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">
                {book.author_name?.[0] || "Unknown"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

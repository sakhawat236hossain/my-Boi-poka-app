import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // id comes as string
  const data = useLoaderData(); // loader data
  const convertId = Number(id); // string -> number
  const singleBook = data.find((book) => book.bookId === convertId);

  if (!singleBook)
    return <div className="p-10 text-center">Book not found</div>;

  const {
    bookName,
    image,
    author,
    review,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
  } = singleBook;

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Book Image */}
        <img
          src={image}
          alt={bookName}
          className="w-full lg:w-80 h-auto object-cover rounded-xl shadow-2xl"
        />

        {/* Book Details */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{bookName}</h1>
          <h2 className="text-lg lg:text-xl text-gray-600 mb-2">
            By: {author}
          </h2>
          <div className="flex items-center gap-4 mb-2">
            <p className="text-yellow-500 font-semibold">Rating: {rating}</p>
            <p className="text-gray-500">Pages: {totalPages}</p>
          </div>
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag, idx) => (
              <span key={idx} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-6">{review}</p>
          <div className="mt-6 text-gray-500">
            <p>
              Publisher: <span className="text-[#23BE0A]">{publisher}</span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="text-[#23BE0A]">{yearOfPublishing}</span>
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="btn bg-[#23BE0A] text-white hover:bg-green-600">
              Read
            </button>
            <button className="btn bg-[#59C6D2] text-white hover:bg-blue-500">
              Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB } from "../../Utility/AddToDb";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams(); // string
  const data = useLoaderData(); // এখন data হবে array
  const convertId = Number(id);

  const singleBook = data.find((book) => book.bookId === convertId);

  const handelMarksAsRead = (id) => {
    
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

    addToStoredDB(id);
  };

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
    bookId
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
          <div className="flex gap-4 flex-wrap mt-4">
            {/* Mark as Read Button */}
            <button
              onClick={() => handelMarksAsRead(bookId)}
              className="btn bg-green-500 text-white hover:bg-green-600"
            >
              Mark as Read
            </button>

            {/* Add to Wish List Button */}
            <button className="btn bg-[#59C6D2] text-white hover:bg-blue-500">
              Add To Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

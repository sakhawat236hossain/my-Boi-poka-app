import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // console.log(singleBook);
  return (
    <Link to={`/bookDetails/${singleBook.bookId}`}>
     <div className="card  bg-white w-80 sm:w-96 shadow-lg border border-gray-200 rounded-2xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      
      {/* Image */}
      <figure className="p-6 bg-gray-200 w-2/3 mx-auto rounded-2xl mt-2">
        <img
          src={singleBook.image}
          alt={singleBook.bookName}
          className="w-[150px] sm:w-[166px] h-64 object-cover rounded-lg"
        />
      </figure>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2 text-gray-700">
  <span className="text-[#23BE0A] font-medium bg-gray-200 p-1 rounded-sm">{singleBook.publisher}</span>
  <span className="text-[#23BE0A] font-medium bg-green-200 p-1 rounded-sm">{singleBook.yearOfPublishing}</span>
</div>

      {/* Card Body */}
      <div className="card-body p-4">
        <h2 className="text-2xl font-bold text-gray-800">{singleBook.bookName}</h2>
        <p className="text-gray-500 text-sm mt-1">By: {singleBook.author}</p>
           <div className="border-t-1 border-dashed"></div>
        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <MdOutlineStarBorderPurple500 className="text-yellow-500" />
          <span className="text-gray-700 font-semibold">{singleBook.rating}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {singleBook.tags?.map((tag, idx) => (
            <button
              key={idx}
              className="badge badge-outline bg-purple-50 text-purple-700 border-purple-300 btn"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
    </Link>
   
  );
};

export default Book;

const Book = ({ singleBook }) => {
  return (
    <div className="card bg-base-100 w-80 sm:w-96 shadow-sm mx-auto border">
      {/* Image */}
      <figure className="p-5">
        <img
          src={singleBook.image}
          alt={singleBook.bookName}
          className="w-[166px] h-64 object-cover rounded-lg"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title">
          {singleBook.bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-sm sm:text-base">{singleBook.review.slice(0, 120)}...</p>

        {/* Tags */}
        <div className="card-actions justify-end flex-wrap gap-2">
          {singleBook.tags?.map((tag, idx) => (
            <div key={idx} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;

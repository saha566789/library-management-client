import { Link } from "react-router-dom";
import Star from "../Rating/Star";

const BookCard = ({ book }) => {
  const { _id, Image, Name, Author, Category, Rating } = book;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="h-96 w-full object-cover" src={Image} alt={Name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{Name}</h2>
        <p className="text-sm text-gray-600">{Author}</p>
        <p className="text-sm text-gray-600">{Category}</p>
        <Star Rating={Rating} />

        <div className="mt-4 flex justify-end">
          <Link to={`/bookDetails/${_id}`}>
            <button className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-lg focus:outline-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;


import { Link } from "react-router-dom";
import Star from "../Rating/Star";

const BookCard = ({book}) => {
    const {_id,Image,Name,Author,Category,Rating} = book
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-96" src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Name} <span className="text-xs">{Author}</span></h2>
    <p>{Category}</p>
    <Star Rating={Rating}></Star>

    <div className="card-actions justify-end">
    <Link to={`/bookDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;
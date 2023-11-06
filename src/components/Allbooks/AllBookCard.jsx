import Star from "../Rating/Star";


const AllBookCard = ({allBook}) => {
    const {Image,Name,Author,Category,Rating} =allBook
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-96 w-96 p-4" src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Name}<span className="text-xs">{Author}</span></h2>
    <Star Rating={Rating}></Star>
    <p>{Category}</p>
    <div className="card-actions justify-center ">
      <button className="btn btn-primary w-52">Update button</button>
    </div>
  </div>
</div>
    );
};

export default AllBookCard;
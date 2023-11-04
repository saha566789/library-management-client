

const BookCategoryCard = ({category}) => {
    const {category_name,relevant_image,relevant_button} = category
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-40 w-full" src={relevant_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    
    <div className="card-actions justify-start">
      <button className="btn btn-primary">{relevant_button}</button>
    </div>
  </div>
</div>
    );
};

export default BookCategoryCard;
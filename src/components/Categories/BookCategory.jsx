import BookCategoryCard from "./BookCategoryCard";


const BookCategory = ({categories}) => {
    return (
        <div className="dark">
            <h2 className="text-center font-bold text-lg">Book Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10'>
                {
                    categories?.map(category=><BookCategoryCard
                    key={category.id}
                    category={category}
                    ></BookCategoryCard> )
                }
            </div>
        </div>
    );
};

export default BookCategory;
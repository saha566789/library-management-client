import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const BookProduct = () => {
    const books = useLoaderData([])
    console.log(books)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-4 mx-4 py-4">
           {
            books.map(book=> <BookCard 
            key={book.id}
            book={book}
            ></BookCard>)
           }
        </div>
    );
};

export default BookProduct;
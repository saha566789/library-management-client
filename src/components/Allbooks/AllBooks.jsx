import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";

const AllBooks = () => {
    const allBooks = useLoaderData([])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-4">
           {
            allBooks.map(allBook=><AllBookCard
            key={allBook.id}
            allBook={allBook}
            ></AllBookCard>)
           }
        </div>
    );
};

export default AllBooks;
import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";
import { useState } from "react";


const AllBooks = () => {
    const allBooks = useLoaderData([])
   const [available,setAvialable] = useState([])

const handleAvialable =()=>{
    const bookFillter = available.filter(allBook=>allBook.Quantity>0)
    if(bookFillter){
        setAvialable(bookFillter)
    }
}
    return (
        <div>
            <button onClick={handleAvialable} className="btn bg-yellow-500 mt-4 ml-8">Available Books</button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-4">

                {
                    allBooks.map(allBook => <AllBookCard
                        key={allBook.id}
                        allBook={allBook}
                    ></AllBookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
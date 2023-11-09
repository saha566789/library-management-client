
import AllBookCard from "./AllBookCard";
import { useEffect, useState } from "react";




const AllBooks = () => {
    const [allBooks2,setAllBooks] =useState([])
//    const [available,setAvialable] = useState([])

useEffect(()=>{
    fetch('https://library-managment-server.vercel.app/libraries',{ credentials: 'include' })
    .then(res=>res.json())
    .then(data=>{
       setAllBooks(data)
    })
},[])
const handleAvialable =()=>{
    const bookFilter = allBooks2.filter(allBook=>allBook.Quantity>0)
    console.log(bookFilter)
    if(bookFilter){
        setAllBooks(bookFilter)
    }

}
    return (
        <div>
            <button onClick={handleAvialable} className="btn bg-yellow-500 mt-4 ml-8">Available Books</button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-4">

                {
                    allBooks2.map(allBook => <AllBookCard
                        key={allBook._id}
                        allBook={allBook}
                    ></AllBookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;

import BookCategory from "../../../Categories/BookCategory";
import Banner from "../Banner";
import { useEffect, useState } from "react";



const Header = () => {
    // const categories = useLoaderData()
    // console.log(categories)
    const [categories,setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data =>{
           setCategory(data)
        })
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <BookCategory categories={categories}></BookCategory>
            </div>
        </div>
    );
};

export default Header;
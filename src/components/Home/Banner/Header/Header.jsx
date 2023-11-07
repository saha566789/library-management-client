
import BookCategory from "../../../Categories/BookCategory";
import Banner from "../Banner";
import { useEffect, useState } from "react";
import BestBook from '../../../../Pages/Anothor/BestBook'
import Description from "../../../../Pages/Description";


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
            <div className="py-4">
           <BestBook>
            </BestBook>
           </div>
           <div>
            <Description></Description>
           </div>
        </div>
    );
};

export default Header;
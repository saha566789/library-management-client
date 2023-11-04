import { useLoaderData } from "react-router-dom";
import BookCategory from "../../../Categories/BookCategory";
import Banner from "../Banner";


const Header = () => {
    const categories = useLoaderData()
    console.log(categories)
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
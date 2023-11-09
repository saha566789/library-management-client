import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const books = useLoaderData()
    const { _id, Image, Name, Author, Quantity,Rating, Category, Description } = books
    const handleUpdate = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, image, quantity, author, category, rating, description }
        console.log(newProduct)

        
        fetch(`https://library-managment-server.vercel.app/bookDetails/${_id}`,{
            method:'PUT',
            headers:{
             'content-type': 'application/json'
            },
            body:JSON.stringify(newProduct)
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    
                })
            }
        
         })
        
    }
    return (
        <div className="bg-[#F4F3F0] lg:p-24">
            <h2 className="lg:text-3xl text-xl font-extrabold">Update a Book</h2>
            <form onSubmit={handleUpdate}>
                {/* form name and image row */}
                <div className="md:flex  mb-8">
                    <div className="form-control   md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={Name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="image" defaultValue={Image}  placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row-2 */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={Quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="author" defaultValue={Author} placeholder="Author" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row-3 */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label  className="input-group">
                            <select type="text" name="category" defaultValue={Category}  className="select select-bordered w-full">
                            {/* <option disabled selected>Category</option> */}
                                <option>Novel</option>
                                <option>History</option>
                                <option>Sci-Fi</option>
                                <option>Drama</option>
                            </select>
                          
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" defaultValue={Rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form  row-4 */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" defaultValue={Description} placeholder="short Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update Book" className="btn btn-block bg-slate-800 text-white " />
            </form>
        </div>
    );
};

export default UpdateBook;
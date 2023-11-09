import { useLoaderData } from "react-router-dom";


const ReadPage = () => {
    const reads = useLoaderData()
    const { _id, Image, Name, Author, Quantity, Category, Description ,Short_description} = reads
    console.log(reads)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">{Name}</h2>
    <p className="text-yellow-400">{Author}</p>
    <p>{Description}</p>
    <p>{Short_description}</p>
   
  </div>
</div>
    );
};

export default ReadPage;
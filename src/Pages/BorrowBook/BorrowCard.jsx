


const BorrowCard = ({borrow,handleDelete}) => {
    const {_id,Image,Category,user,returnDate,
        borrowedDate,Name,book_id,Quantity
        } = borrow
      
            
    
                   
       
      
    return (
        <div className="card card-compact w-72 lg:ml-16 mt-4 bg-base-100 shadow-xl">
        <figure><img className="w-full h-72" src={Image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title ">Name:{Name}</h2>
          
          <p><span className=" font-bold">Category:</span>{Category}</p>
          <p><span className=" font-bold">Borrow Date:</span>{borrowedDate}</p>
          <p><span className=" font-bold">Return Date:</span>{returnDate}</p>
          <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id,Quantity,book_id)} className="btn btn-primary">Return</button>
          </div>
        </div>
      </div>
    );
};

export default BorrowCard;
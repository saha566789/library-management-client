


const BorrowCard = ({borrow,handleDelete}) => {
    const {_id,Image,Category,user,returnDate,
        borrowedDate,Name
        } = borrow
      
            
    
                   
       
      
    return (
        <div className="card card-compact w-72 ml-16 mt-4 bg-base-100 shadow-xl">
        <figure><img className="w-full h-72" src={Image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:{user}</h2>
          <h3>Name:{Name}</h3>
          <p><span className=" font-bold">Category:</span>{Category}</p>
          <p>BorrowDate:{borrowedDate}</p>
          <p>Return date:{returnDate}</p>
          <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">Return</button>
          </div>
        </div>
      </div>
    );
};

export default BorrowCard;
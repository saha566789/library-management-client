import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Hooks/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";




const BookDetails = () => {
    const details = useLoaderData()
    const id =useParams().id
    console.log(details)
    const { _id, Image, Name, Author, Quantity, Category, Description } = details
    const { user } = useContext(AuthContext)

    // const [bookQuantity, setBookQuantity] = useState(Quantity);
    
    const [borrowed,setBorrowed] = useState({})
    // const [booleanBorrow,setBooleanBorrow]= useState(false)
    
    




    const closeModal = () => {
        const modal = document.getElementById("my_modal_5");
        modal.close();
    };
   
   let borrowBooked= Boolean(borrowed)
   console.log(borrowed)
//    setBooleanBorrow(borrowBooked)
//    console.log(borrowBooked)
   
   useEffect(()=>{
    fetch(`https://library-managment-server.vercel.app/borrowed/${id}?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setBorrowed(data)
      
    })
   },[id,user.email])



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        // const email =form.email.value;
        
        const returnDate = form.returnDate.value;
        const submit = {
            user: user.displayName,
            email: user.email,
            borrowedDate:new Date().toLocaleDateString(),
            returnDate,
            book_id: _id,
            Image,
            Category,
            Name,
            Quantity

        }

        // if (bookQuantity > 0) {
        //     setBookQuantity(bookQuantity - 1);
        //   }
      
          console.log(submit)
     
       fetch('https://library-managment-server.vercel.app/borrow',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(submit)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.insertedId){
            toast.success('You have borrowed a book.')
        }
       
       })
       const quantity = {Quantity:(Quantity-1),id:_id}
     fetch(`https://library-managment-server.vercel.app/bookDetails`,{ 
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(quantity)
       
     })
     .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
            toast.success('You have borrowed a book.')
        }
        else{
            toast.error('exist')}
       })
      
   

    }
    return (
        <div>
            <div className="max-w-6xl mx-auto flex lg:flex-row flex-col gap-4 mt-4">
                <img className="h-96" src={Image} alt="" />
                <h2 className="lg:text-5xl text-xl">{Name} <span> <p className="text-xs font-bold">({Quantity}* Available now)</p>
                    <p className="text-xs">Written by{Author}</p>
                    <p className="lg:text-2xl text-lg">{Description}</p>
                 <Link to={`/bookDetails/read/${_id}`}><button className="border h-10 w-28 mr-3 text-lg font-medium  border-black">Read</button></Link>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        
{
    !borrowBooked|| Quantity<1 ? <button className="btn bg-yellow-700 text-white" 
  
    disabled
    // disabled={bookQuantity === 0}
    >Borrow</button> :<button className="btn bg-yellow-700 text-white" 
    onClick={() => document.getElementById('my_modal_5').showModal()}
      
    // disabled={bookQuantity === 0}
    >Borrow</button>
}

{/* {
        !(booleanBorrow || Quantity==0)? <button  onClick={()=>document.getElementById('my_modal_3').showModal()} className={`mt-2 font-bold  hover:bg-[#ffffff] hover:shadow-md hover:text-[#4b2b53] px-4 py-2 bg-[#8c3f82] text-[#e2e2e2] rounded-md `}> Borrow </button>: <button disabled onClick={()=>document.getElementById('my_modal_3').showModal()} className={`mt-2 font-bold bg-[#2f302e7a]    px-4 py-2 text-[#a8a8a8] rounded-md `}> Borrow </button>
      } */}


                    
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <form onSubmit={handleSubmit} className="card-body">
                              
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input type="date" name="returnDate" placeholder="date" className="input input-bordered" required id="" />

                                </div>
                          <input onClick={closeModal} type="submit" value="Submit" className="input input-bordered" />
                               
                            </form>


                        </div>
                    </dialog>

                </span></h2>

            </div>
            <div className="max-w-6xl mx-auto">

            </div>
        </div>
    );
};

export default BookDetails;
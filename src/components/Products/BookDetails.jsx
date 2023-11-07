import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Hooks/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";




const BookDetails = () => {
    const details = useLoaderData(true)
    const id =useParams().id
    console.log(details)
    const { _id, Image, Name, Author, Quantity, Category, Description } = details
    const { user } = useContext(AuthContext)

    // const [bookQuantity, setBookQuantity] = useState(Quantity);
    
    const [borrowed,setBorrowed] = useState({})


    const closeModal = () => {
        const modal = document.getElementById("my_modal_5");
        modal.close();
    };

   let borrowBooked= Boolean(borrowed)
   console.log(borrowed)

   useEffect(()=>{
    fetch(`http://localhost:5173/borrowBook/${id}?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
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
            borrowedDate:new Date(),
            returnDate,
            book_id: _id,
            Image,
            Category,
            Name

        }

        // if (bookQuantity > 0) {
        //     setBookQuantity(bookQuantity - 1);
        //   }
      
          console.log(submit)

       fetch('http://localhost:5000/borrow',{
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

     fetch(`http://localhost:5000/bookDetails`,{ 
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({Quantity:(Quantity-1),id:_id})
       
     })
     .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
            toast.success('You have borrowed a book.')
        }
       })

    }
    return (
        <div>
            <div className="max-w-6xl mx-auto flex gap-4 mt-4">
                <img className="h-96" src={Image} alt="" />
                <h2 className="text-5xl">{Name} <span> <p className="text-xs font-bold">({Quantity}* Available now)</p>
                    <p className="text-xs">Written by{Author}</p>
                    <p className="text-2xl">{Description}</p>
                    <button className="border h-10 w-28 mr-3 text-lg font-medium  border-black">Read</button>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                        
{
    !borrowBooked || Quantity<1? <button className="btn bg-yellow-700 text-white" 
    onClick={() => document.getElementById('my_modal_5').showModal()}
    disabled
    // disabled={bookQuantity === 0}
    >Borrow</button> :<button className="btn bg-yellow-700 text-white" 
    onClick={() => document.getElementById('my_modal_5').showModal()}
      
    // disabled={bookQuantity === 0}
    >Borrow</button>
}


                    
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
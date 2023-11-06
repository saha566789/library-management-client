import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";


const BookDetails = () => {
    const details = useLoaderData(true)
    console.log(details)
    const {_id,Image,Name,Author,Quantity,Category,Description} = details
      const {user} = useContext(AuthContext)

      const closeModal = () => {
        const modal = document.getElementById("my_modal_5");
        modal.close();
      };


    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        // const email =form.email.value;
        const returnDate = form.returnDate.value;
        const submit = {
            user:user.displayName,
            email:user.email,  
            returnDate,
            book:_id,
            Image,
           Category

        }
        console.log(submit)
    }
    return (
        <div>
            <div className="max-w-6xl mx-auto flex gap-4 mt-4">
                <img className="h-96" src={Image}  alt="" />
                <h2 className="text-5xl">{Name} <span> <p className="text-xs font-bold">({Quantity}* Available now)</p>
                    <p className="text-xs">Written by{Author}</p>
                    <p className="text-2xl">{Description}</p>
                    <button className="border h-10 w-28 mr-3 text-lg font-medium  border-black">Read</button>
    
                 {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-yellow-700 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

  <form onSubmit={handleSubmit} className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
         
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date</span>
          </label>
          <input type="date" name="returnDate" placeholder="data" className="input input-bordered" required id="" />
         
        </div>
        <input onClick={closeModal} type="submit" value="Submit" className="input input-bordered"  />
        {/* <div className="modal-action">
      <form method="dialog">
       
       <input type="submit" value="Submit" className="input input-bordered"  />
      </form>
    </div> */}
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
import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const details = useLoaderData(true)
    console.log(details)
    const {_id,Image,Name,Author,Quantity,Rating,Description} = details
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
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

  <form className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date</span>
          </label>
          <input type="date" name="date" placeholder="data" className="input input-bordered" required id="" />
         
        </div>
        
      </form>



    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Submit</button>
      </form>
    </div>
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
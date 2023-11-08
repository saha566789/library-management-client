import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import BorrowCard from "./BorrowCard";
import toast from "react-hot-toast";





const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const [borrowBook,setBorrowBook] = useState([])
   
    const url = `http://localhost:5000/borrow?email=${user?.email}`;
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowBook(data))
    }, [url]);


    const handleDelete =(id,Quantity,book_id) =>{
        console.log(Quantity)
        fetch(`http://localhost:5000/borrow/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('deleted successful');
                        const remaining = borrowBook.filter(borrow => borrow._id !== id);
                       setBorrowBook(remaining);
                    }
                })
                 let data ={Quantity:(Quantity),id:book_id}
                 console.log(data)
                // const data = {Quantity:Quantity}
                fetch(`http://localhost:5000/borrow/${book_id}`,{ 
                    
                    method:'PATCH',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(data)
                   
                 })
                 .then(res => res.json())
                   .then(data =>{
                    console.log(data)
                    // if(data.modifiedCount>0){
                    //     toast.success('You have borrowed a book.')
                    // }
                   })
    }
    return (
       <div>
        {
            borrowBook.length?  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                borrowBook.map(borrow=><BorrowCard
                key={borrow._id}
                borrow={borrow}
                handleDelete={handleDelete}
                ></BorrowCard>)
            }
        </div> :<div className="text-center text-lg lg:text-5xl p-20 lg:p-44">NO BorrowBooks available</div>
        }
       </div>
    );
};

export default BorrowedBooks;
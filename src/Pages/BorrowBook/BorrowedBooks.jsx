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


    const handleDelete =(id,Quantity,_id) =>{
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

                // fetch(`http://localhost:5000/borrow`,{ 
                //     method:'PATCH',
                //     headers:{
                //         'content-type': 'application/json'
                //     },
                //     body:JSON.stringify({Quantity:(Quantity+1),id:_id})
                   
                //  })
                //  .then(res => res.json())
                //    .then(data =>{
                //     console.log(data)
                //     if(data.modifiedCount>0){
                //         toast.success('You have borrowed a book.')
                //     }
                //    })
    }
    return (
        <div>
            {
                borrowBook.map(borrow=><BorrowCard
                key={borrow._id}
                borrow={borrow}
                handleDelete={handleDelete}
                ></BorrowCard>)
            }
        </div>
    );
};

export default BorrowedBooks;
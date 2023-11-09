import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import BorrowCard from "./BorrowCard";
import toast from "react-hot-toast";





const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const [borrowBook,setBorrowBook] = useState([])


    // const { isPending, isError, error, data: borrowBook } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://library-managment-server.vercel.app/borrow?email=${user?.email}`);
    //         return res.json();
    //     }
    // })

   
    const url = `https://library-managment-server.vercel.app/borrow?email=${user?.email}`;
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowBook(data))
    }, [url]);


    const handleDelete =(id,Quantity,book_id) =>{
        console.log(Quantity)
        fetch(`https://library-managment-server.vercel.app/borrow/${id}`, {
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
                fetch(`https://library-managment-server.vercel.app/borrow/${book_id}`,{ 
                    
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

    // if (isPending) {
    //     return <span className="loading loading-spinner text-primary"></span>
    // }

    // if (isError) {
    //     return <p>{error.message}</p>
    // }

    



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
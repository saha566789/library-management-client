import { AiFillStar } from 'react-icons/ai';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa';

const Star = ({Rating}) => {
   const ratingStar = Array.from({length:5},(elem,index)=>{
       let number = index + 0.2;


       return <span key={index}>
       {
        Rating > index +1 ? 
      <FaStar className='icon text-yellow-400'></FaStar>
        : Rating > number
         ? <FaStarHalfAlt className='icon text-yellow-400'></FaStarHalfAlt> 
         : <AiFillStar className='icon text-yellow-400'></AiFillStar>
       }
       </span>
    })
    return (
        <div className='icon-style flex'>
          {ratingStar}
        </div>
    );
};

export default Star;
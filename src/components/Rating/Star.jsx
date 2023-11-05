import { AiFillStar } from 'react-icons/ai';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa';

const Star = ({Rating}) => {
   const ratingStar = Array.from({length:5},(elem,index)=>{
       let number = index + 0.2;


       return <span key={index}>
       {
        Rating > index +1 ? 
      <FaStar className='icon'></FaStar>
        : Rating > number
         ? <FaStarHalfAlt className='icon'></FaStarHalfAlt> 
         : <AiFillStar className='icon'></AiFillStar>
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
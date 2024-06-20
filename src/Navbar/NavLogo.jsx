import logoPic from '../assets/logo.jpg'
const NavLogo = () => {
    return (
        <div className='flex'>
         <img className='w-8 lg:w-16' src={logoPic} alt="" />
           <p className='text-xl lg:text-4xl dark:text-blue-400'>BookNestor</p>
           
        </div>
    );
};

export default NavLogo;
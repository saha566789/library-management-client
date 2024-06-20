import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

const Theme = () => {
    const [mode, setMode] = useState('light');

    const changeTheme = () => {
        const html = document.documentElement;
        if (mode === "light") {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');
            localStorage.setItem("mode","dark")
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            setMode('light');
            localStorage.setItem("mode","light")
        }
    };
    useEffect(()=>{
        const currentMode = localStorage.getItem("mode") || "light"
         setMode(currentMode)
        
         const html = document.documentElement
         html.classList.add(currentMode)
    },[])

    return (
        <div>
            <button onClick={changeTheme} className='btn'>
                {mode === "light" ? <FaRegMoon></FaRegMoon> :
                <IoIosSunny></IoIosSunny>}
            </button>
        </div>
    );
};

export default Theme;

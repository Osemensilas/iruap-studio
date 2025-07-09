import Link from "next/link";
import { useState } from "react";

const Header = () => {

    const [openDropDown, setOpenDropDown] = useState(false);
    const [dropDownClicked, setOpenDropDownClicked] = useState('');

    const dropDown = () => {
        if (dropDownClicked === ''){
            setOpenDropDownClicked('clicked');
            setOpenDropDown(true);
        }else{
            setOpenDropDownClicked('');
            setOpenDropDown(false);
        }
    }
    return ( 
        <>
        <header id="header" className="h-[80px] w-screen px-[40px] absolute bg-transparent z-[100] border-b border-grey">
            <nav className="h-full w-full flex items-center justify-between">
                <div className="h-max w-max flex items-center">
                    <img src={"/logo.png"} className="h-[30px] w-[40px] cursor-pointer mr-[50px]" alt="logo" />
                    <div className="h-max w-max">
                        <ul className="flex items-center">
                            <li className="h-max w-max mr-[15px] group">
                                <Link className="text-accent group-hover:text-primary group-hover:underline transition-all duration-500" href="/">Hire Developer</Link>
                            </li>
                            <li className="h-max w-max mr-[15px] group">
                                <Link className="text-accent group-hover:text-primary group-hover:underline transition-all duration-500" href="/">About Us</Link>
                            </li>
                            <li className="h-max w-max mr-[15px] group">
                                <Link className="text-accent group-hover:text-primary group-hover:underline transition-all duration-500" href="/">Contact Us</Link>
                            </li>
                            <li className="h-max w-max mr-[15px] group">
                                <Link className="text-accent group-hover:text-primary group-hover:underline transition-all duration-500" href="/">Work with Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-max w-max flex items-center">
                    <div id="services-nav" className="h-max w-max">
                        <button onClick={dropDown} className={`flex items-center text-accent hover:text-primary transition-all duration-500 group
                            ${openDropDown ? "border-b border-primary text-primary" : ""}
                            `} >Services 
                            <div className="ml-[5px] h-[20px] w-[20px] relative">
                                <i className={`absolute top-[10px] left-[9px] h-[2px] w-[10px] bg-accent group-hover:bg-primary transition-all duration-500
                                    ${openDropDown ? "rotate-45 bg-primary" : "-rotate-45"}
                                    `}></i>
                                <i className={`absolute top-[10px] left-[3px] h-[2px] w-[10px] bg-accent group-hover:bg-primary transition-all duration-500
                                    ${openDropDown ? "-rotate-45 bg-primary" : "rotate-45"}
                                    `}></i>
                            </div>
                        </button>
                        <div id="services-nav-container" className={`absolute top-[80px] left-0 h-[50vh] w-screen transition-all duration-500
                            ${openDropDown ? "block bg-background" : "hidden"}
                            `}>
                            <Link href={"/"}>Screen Recorder</Link>
                        </div>
                    </div>
                    <div className="ml-[50px] h-max w-max">
                        <Link className="text-text py-[10px] px-[25px] rounded outline-none border-none bg-primary" href={"/"}>Sign In</Link>
                    </div>
                </div>
            </nav>
        </header>
        </>
     );
}
 
export default Header;
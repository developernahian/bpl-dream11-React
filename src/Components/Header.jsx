import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/images/logo.png';
import coin from '../assets/images/currency.png';

const Header = () => {
    return (
        <div>





            {/* ***************************** Navbar Start ***************************** */}
            <nav className="navbar rounded-xl">

                {/* Logo */}
                <div className="flex-1 px-2 lg:flex-none">
                    <img src={logo} alt="logo" className="w-20" />
                </div>

                {/* Dropdown menu for small screens */}
                <div className="flex flex-1 justify-end px-2">
                    <div className="flex items-stretch">

                        <div className="md:hidden dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
                            
                            <GiHamburgerMenu  className="text-2xl"/>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow absolute left-5">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>




                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <ul className='h-full flex items-center  space-x-12 text-secondary'>
                                <li>
                                    <a href="" className=''>Home</a>
                                </li>

                                <li>
                                    <a href="" className=''>Fixture</a>
                                </li>

                                <li>
                                    <a href="">Teams</a>
                                </li>
                                <li>
                                    <a href="">Schedules</a>
                                </li>
                            </ul>

                        </div>




                        <div className="border-2 rounded-xl border-[rgba(19, 19, 19, 0.1)] px-5 py-2 md:py-4  flex justify-center items-center md:ml-12 space-x-2 md:space-x-3 text-[15px] md:text-[16px]">
                            <p className="">1000000</p>
                            <p>Coin</p>
                            <img src={coin} alt='coin'/>
                        </div>


                    </div>
                </div>

            </nav>
            {/* ***************************** Navbar End ***************************** */}










            {/* ***************************** Banner Start ***************************** */}
            <section>
                
            </section>
            {/* ***************************** Banner End ***************************** */}





            



        </div>
    );
};

export default Header;
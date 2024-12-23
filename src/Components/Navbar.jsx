import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <div>










            {/* ***************************** Navbar Start ***************************** */}
            <nav className="navbar bg-base-300 rounded-box">

                {/* Logo */}
                <div className="flex-1 px-2 lg:flex-none">
                    <img src={logo} alt="logo" className="w-20" />
                </div>

                {/* Dropdown menu for small screens */}
                <div className="flex flex-1 justify-end px-2">
                    <div className="flex items-stretch">

                        <div className="md:hidden dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>




                        {/* Desktop menu */}
                        <div className="hidden md:block">
                            <ul className='bg-green-300 h-full flex items-center  space-x-4'>
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




                        <div className=" bg-red-400 flex justify-center items-center">
                            coin
                        </div>


                    </div>
                </div>

            </nav>
            {/* ***************************** Navbar End ***************************** */}








        </div>
    );
};

export default Navbar;
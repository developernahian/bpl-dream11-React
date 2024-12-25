import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import bgShadow from '../assets/images/bg-shadow.png';
import bannerMain from '../assets/images/banner-main.png';
import PropTypes from 'prop-types';

const Header = ({ handleIncreaseCredit, credit, handleClickActiveTab, activeTab }) => {




    return (
        <div>





            {/* ***************************** Navbar Start ***************************** */}
            <nav className="navbar rounded-xl">

                {/* Logo */}
                <div className="flex-1 lg:flex-none">
                    <img src={logo} alt="logo" className="w-20" />
                </div>

                {/* Dropdown menu for small screens */}
                <div className="flex flex-1 justify-end px-2">
                    <div className="flex items-stretch">

                        <div className="md:hidden dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">

                                <GiHamburgerMenu className="text-2xl" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-40 p-2 shadow absolute left-3">
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




                        <div className="border-2 rounded-xl px-5 py-2 md:py-4 flex justify-center items-center md:ml-12 space-x-2 md:space-x-3 text-[15px] md:text-[16px]">
                            <p className="">{credit}</p>
                            <p>Coin</p>
                            <img src={coin} alt='coin' />
                        </div>


                    </div>
                </div>

            </nav>
            {/* ***************************** Navbar End ***************************** */}










            {/* ***************************** Banner Start ***************************** */}

            <section
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundColor: 'black',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className=" mt-10 flex flex-col justify-center items-center rounded-xl">


                <img src={bannerMain} alt="" className="w-66 mt-12" />
                <p className="text-white_primary text-center text-lg md:text-3xl lg:text-[42px] pt-6 pb-4">Assemble Your Ultimate Dream 11 Cricket Team</p>
                <p className="text-white_secondary text-center text-base md:text-2xl">Beyond Boundaries Beyond Limits</p>

                <div className="border-2 rounded-xl border-[#E7FE29] px-2 py-2 hover:border-yellow-500 mt-6 mb-12">
                    <button onClick={() => handleIncreaseCredit(700000)} className="btn font-bold bg-[#E7FE29] hover:bg-yellow-500">Claim Free Credit</button>
                </div>

            </section>
            {/* ***************************** Banner End ***************************** */}



            {/* ***************************** Toggle Button Start with Status Satrt ***************************** */}

            <section className="flex justify-between items-center mt-10">
                {/* left */}
                <div>
                    {
                        activeTab === 'available' ? (
                            <div>
                                <p>Available Players</p>
                            </div>
                        ) : (
                            <div>
                                <p>Selected Players</p>
                            </div>
                        )
                    }
                </div>
                {/* right */}
                <div>
                    <button
                        onClick={() => handleClickActiveTab('available')}
                        className={`${activeTab === 'available' ? 'bg-green-500' : 'bg-red-500'}`}
                    >Available</button>

                    <button
                        onClick={() => handleClickActiveTab('selected')}
                        className={`${activeTab === 'selected' ? 'text-green-500' : 'text-red-500'}`}
                    >Selected</button>
                </div>


            </section>


            {/* ***************************** Toggle Button End with Status End ***************************** */}












        </div>
    );
};



Header.propTypes = {

    handleIncreaseCredit: PropTypes.func.isRequired,
    credit: PropTypes.number.isRequired,

    handleClickActiveTab: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,


}



export default Header;
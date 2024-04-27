import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookMark_icon, bookMark_icon2, user_icon } from '../../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

function HomePageNav() {
    const menuRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const HomePageNavItem = ({ title, src, nav }) => {

        const toggleNavigate = () => {
            navigate(nav);
        }

        return (
            <section className="flex items-center gap-5 cursor-pointer" onClick={toggleNavigate}>
                <img src={src} alt="icon" />
                <h3 className='text-secondary text-[18px]'>{title}</h3>
            </section>
        );
    }

    HomePageNavItem.propTypes = {
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        nav: PropTypes.string.isRequired,
    };

    const handleRemoveMenu = () => {
        menuRef.current?.classList.remove('getMenu');
    }

    const handleLogOut = async () => {
        try {
            await axios.post('https://trippa-fp9c.onrender.com/api/logout');
            localStorage.removeItem('token');
            navigate('/signIn-page');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (location.pathname === '/signIn-page' || location.pathname === '/signUp-page') {
        handleLogOut();
    }

    return (
        <section className="homePageMenu_section hidden flex-col items-center gap-[40px] fixed right-0 w-[250px] h-full bg-primary z-30 py-[40px] rounded-tl-[20px] sm:w-[300px] lg:right-[280px]" ref={menuRef}>
            <>
                <div className='flex items-center justify-center w-[40px] h-[40px] bg-secondary rounded-[50%] mr-[20px] self-end cursor-pointer' onClick={handleRemoveMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className='opacity-50' />
                </div>
                <span className=" flex flex-col gap-6 justify-center">
                    <HomePageNavItem
                        title="Saved Trips"
                        src={bookMark_icon}
                        nav="/saved_trips-page"
                    />
                    <HomePageNavItem
                        title="Bookings"
                        src={bookMark_icon2}
                        nav="" // Specify where this option should navigate
                    />
                    <HomePageNavItem
                        title="Account"
                        src={user_icon}
                        nav="/user_profile-page"
                    />
                    <div className='flex items-center gap-5 cursor-pointer text-secondary' onClick={handleLogOut}>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                        <span>LogOut</span>
                    </div>
                </span>
            </>
        </section>
    );
}

export default HomePageNav;

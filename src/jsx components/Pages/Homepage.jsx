import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterIcon, notification_bell, profileImg, searchIcon, waveEmoji } from '../../assets';
import Footer_nav from '../Navigations/Footer_nav';
import Filter from '../Home_Page_Routes/Filter';
import HomePage_model from '../Home_Page_Routes/HomePage_model';
import HomePageNav from '../Navigations/MenuSlide';
import axios from 'axios';

const Homepage = ({ activityData, hotelData, guideData, restaurantData }) => {
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState({
        activities: activityData,
        hotels: hotelData,
        guides: guideData,
        restaurants: restaurantData
    });

    const filterRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("Token not found");
                }
                const response = await axios.get('https://trippa-fp9c.onrender.com/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserName(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                alert('Failed to fetch user profile. Please check your connection and login status.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                const Filter = document.querySelector(`.filter`);
                Filter.classList.remove('toggleFilter');
            }

            if (menuRef.current && !menuRef.current.contains(event.target)) {
                const Menu = document.querySelector(`.homePageMenu_section`);
                Menu.classList.remove('getMenu');
            }
        };

        const handleScroll = () => {
            const Filter = document.querySelector(`.filter`);
            Filter.classList.remove('toggleFilter');
            const Menu = document.querySelector(`.homePageMenu_section`);
            Menu.classList.remove('getMenu');
        };

        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const filterData = () => {
            if (!searchQuery) {
                setFilteredData({
                    activities: activityData,
                    hotels: hotelData,
                    guides: guideData,
                    restaurants: restaurantData
                });
                return;
            }

            const lowercasedQuery = searchQuery.toLowerCase();

            const filterItems = (items) => {
                return items.filter(item => item && item.NAME && item.NAME.toLowerCase().includes(lowercasedQuery));
            };

            setFilteredData({
                activities: filterItems(activityData),
                hotels: filterItems(hotelData),
                guides: filterItems(guideData),
                restaurants: filterItems(restaurantData)
            });
        };

        filterData();
    }, [searchQuery, activityData, hotelData, guideData, restaurantData]);

    const handleShowFilter = () => {
        const Filter = document.querySelector(`.filter`);
        Filter.classList.toggle('toggleFilter');
    };

    const handleGetMenu = () => {
        const Menu = document.querySelector(`.homePageMenu_section`);
        Menu.classList.toggle('getMenu');
    };

    if (loading) {
        return (
            <p className="flex items-center justify-center h-[100vh] w-full">
                <FontAwesomeIcon icon="fa-solid fa-spinner" size="2x" spin />
            </p>
        );
    }

    return (
        <section className='relative flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full lg:w-[1000px]'>
                <div className='flex flex-col gap-5 py-[20px] px-[20px] z-20 bg-page_color fixed top-0 w-full lg:w-[1000px]'>
                    <div className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <img src={profileImg} alt="profile image" onClick={handleGetMenu} className='md:w-[50px] lg:w-[60px] cursor-pointer' />
                            <h4>Welcome {userName && userName.firstname}</h4>
                            <img src={waveEmoji} alt="waving emoji" />
                        </span>
                        <img src={notification_bell} alt="notification bell" className='cursor-pointer' />
                    </div>
                    <span className='relative flex items-center gap-4'>
                        <img src={searchIcon} alt="search icon" className='absolute top-[16px] left-[10px]' />
                        <input
                            type="search"
                            placeholder='Search'
                            className='rounded-[8px] h-[48px] py-[8px] px-[30px] outline-none bg-search_input_color w-full'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <img src={filterIcon} alt="filter icon" onClick={handleShowFilter} className='w-[20px] cursor-pointer' />
                    </span>
                </div>
                <HomePageNav />
                <HomePage_model
                    activityData={filteredData.activities}
                    hotelData={filteredData.hotels}
                    guideData={filteredData.guides}
                    restaurantData={filteredData.restaurants}
                />
                <Footer_nav />
                <Filter />
            </div>
        </section>
    );
};

Homepage.propTypes = {
    activityData: PropTypes.array.isRequired,
    hotelData: PropTypes.array.isRequired,
    guideData: PropTypes.array.isRequired,
    restaurantData: PropTypes.array.isRequired,
};

export default Homepage;

import { useRef, useEffect } from 'react';
import { filterIcon, notification_bell, profileImg, searchIcon, waveEmoji } from '../../assets';
import Footer_nav from '../Navigations/Footer_nav';
import Filter from '../Home_Page_Routes/Filter';
import HomePage_model from '../Home_Page_Routes/HomePage_model';
import HomePageNav from '../Navigations/MenuSlide';

const Homepage = () => {
    const filterRef = useRef(null);
    const menuRef = useRef(null);
    
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

    const handleShowFilter = () => {
        const Filter = document.querySelector(`.filter`);
        Filter.classList.toggle('toggleFilter');
    };

    const handleGetMenu = () => {
        const Menu = document.querySelector(`.homePageMenu_section`);
        Menu.classList.toggle('getMenu');
    };

    return (
        <section className='relative flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full lg:w-[1000px]'>
                <div className='flex flex-col gap-5 py-[20px] px-[20px] z-20 bg-page_color fixed top-0 w-full lg:w-[1000px]'>
                    <div className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <img src={profileImg} alt="profile image" onClick={handleGetMenu} className='md:w-[50px] lg:w-[60px] cursor-pointer' />
                            <h4>Hi{name && `, ${name}`}</h4>
                            <img src={waveEmoji} alt="waving emoji" />
                        </span>
                        <img src={notification_bell} alt="notification bell" className='cursor-pointer' />
                    </div>
                    <span className='relative flex items-center gap-4'>
                        <img src={searchIcon} alt="search icon" className='absolute top-[16px] left-[10px]' />
                        <input type="search" placeholder='Search' className='rounded-[8px] h-[48px] py-[8px] px-[30px] outline-none bg-search_input_color w-full' />
                        <img src={filterIcon} alt="filter icon" onClick={handleShowFilter} className='w-[20px] cursor-pointer' />
                    </span>
                </div>
                <HomePageNav name={name}/>
                <HomePage_model />
                <Footer_nav />
                <Filter />
            </div>
        </section>
    );
};

export default Homepage;

import React from 'react'
import { filterIcon, notification_bell, profileImg, searchIcon, waveEmoji } from '../assets'
import Footer_nav from './Navigations/Footer_nav'
import Filter from './Home_Page_Routes/Filter'

const Homepage = () => {

    const handleShowFilter = () => {
        const Filter = document.querySelector(`.filter`);
        Filter.classList.toggle('toggleFilter')
    }
    return (
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col justify-between items-center h-[100vh] w-full lg:w-[1000px]  '>
                <div className='p-[20px] w-full'>
                    <div className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'>
                            <img src={profileImg} alt="profile image" className=' md:w-[50px] lg:w-[60px]' />
                            <h4>Hi</h4>
                            <img src={waveEmoji} alt="waving emoji" />
                        </span>
                        <img src={notification_bell} alt="notification bell" className=' md:w-[25px] cursor-pointer' />
                    </div>
                    <div className='relative mt-8'>
                        <img src={searchIcon} alt="search icon" className='absolute top-[17px] left-[15px]' />
                        <input type="search" placeholder='Search' className='rounded-[8px] h-[48px] py-[8px] px-[40px] outline-none bg-search_input_color w-full' />
                        <img src={filterIcon} alt="filter icon" onClick={handleShowFilter} className='absolute top-[17px] right-[15px] w-[20px] cursor-pointer' />
                    </div>
                    <Filter />
                </div>
                <Footer_nav />
            </div>
        </section>
    )
}

export default Homepage
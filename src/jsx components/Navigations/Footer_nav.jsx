import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { favouriteIcon, favouriteIcon_clicked, homeIcon, homeIcon_clicked, messageIcon, messageIcon_clicked, notificationIcon, notificationIcon_clicked } from '../../assets'

const Footer_navProps = (props) => {
    const { src, selectedSrc, nav } = props
    const location = useLocation();
    const navigate = useNavigate();

    const isSelected = location.pathname === nav;

    const handleNavigate = () => {
        navigate(nav)
    }


    return (
        <picture onClick={handleNavigate} className={`w-[64px] h-[52px] flex flex-col gap-1 items-center justify-center rounded-[8px] ${isSelected? 'bg-highlight_purple' : ''}`}>
            <img src={!isSelected ? src : selectedSrc} alt="nav icon" />
            {isSelected && <div className='w-[5px] h-[5px] rounded bg-primary'/>}
        </picture>
    )
}



const Footer_nav = () => {

    return (
        <div className='flex items-center px-5 justify-between h-[100px] w-full bg-secondary rounded-tl-[30px] rounded-tr-[30px]'>
            <Footer_navProps
                src={homeIcon}
                selectedSrc={homeIcon_clicked}
                nav="/home-page"
            />
            <Footer_navProps
                src={messageIcon}
                selectedSrc={messageIcon_clicked}
                nav=""
            />
            <Footer_navProps
                src={notificationIcon}
                selectedSrc={notificationIcon_clicked}
                nav=""
            />
            <Footer_navProps
                src={favouriteIcon}
                selectedSrc={favouriteIcon_clicked}
                nav=""
            />
        </div>
    )
}


export default Footer_nav
import PropTypes from 'prop-types';
import { useNavigate, useLocation} from 'react-router-dom';
import { favouriteIcon, favouriteIcon_clicked, homeIcon, homeIcon_clicked, messageIcon, messageIcon_clicked, notificationIcon, notificationIcon_clicked } from '../../assets';

const Footer_nav = () => {
    const Footer_navProps = ({ src, selectedSrc, nav }) => {
        const location = useLocation();
        const navigate = useNavigate();

        const isSelected = location.pathname === nav;

        const handleNavigate = () => {
            navigate(nav);
        };

        return (
            <picture onClick={handleNavigate} className={`w-[74px] h-[62px] flex flex-col gap-1 items-center justify-center rounded-[8px] cursor-pointer ${isSelected ? 'bg-highlight_purple' : ''}`}>
                <img src={!isSelected ? src : selectedSrc} alt="nav icon" />
                {isSelected && <div className='w-[5px] h-[5px] rounded bg-primary' />}
            </picture>
        );
    };

    Footer_navProps.propTypes = {
        src: PropTypes.string.isRequired,
        selectedSrc: PropTypes.string.isRequired,
        nav: PropTypes.string.isRequired
    };

    return (
        <div className='flex items-center justify-between h-[100px] w-full bg-secondary z-20 rounded-tl-[30px] rounded-tr-[30px] fixed bottom-0 p-[20px] lg:w-[1000px]'>
            <Footer_navProps
                src={homeIcon}
                selectedSrc={homeIcon_clicked}
                nav={"/home-page"}
            />
            <Footer_navProps
                src={messageIcon}
                selectedSrc={messageIcon_clicked}
                nav={"/message-page"}
            />
            <Footer_navProps
                src={notificationIcon}
                selectedSrc={notificationIcon_clicked}
                nav={"/notification-page"}
            />
            <Footer_navProps
                src={favouriteIcon}
                selectedSrc={favouriteIcon_clicked}
                nav={"/favourite-page"}
            />
        </div>
    );
};

export default Footer_nav;

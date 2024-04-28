import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rate_profile } from "../../../assets";

const RestaurantSection = ({restaurantData}) => {
    const navigate = useNavigate();

    const handleViewRestaurant = (index) => {
        navigate(`/restaurant/${index}`);

        let recentViewed = JSON.parse(localStorage.getItem('recentViewed')) || [];
        const existingIndex = recentViewed.findIndex(restaurant => restaurant.id === restaurantData[index].id);

        if (existingIndex !== -1) {
            recentViewed.splice(existingIndex, 1);
        }
        recentViewed.unshift(restaurantData[index]);
        if (recentViewed.length > 4) {
            recentViewed.pop();
        }
        localStorage.setItem('recentViewed', JSON.stringify(recentViewed));
    }

    return (
        <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-2'>
            {restaurantData && restaurantData.map((restaurant, index) => (
                <div key={index} className='relative flex flex-col gap-3 justify-center items-center rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>
                    <img src={restaurant["PICTURE 1"]} alt={restaurant.alt} className='box_size_2 rounded-[10px] ' />
                    <FontAwesomeIcon icon="fa-regular fa-heart" className="absolute top-[30px] right-[40px]  text-red-500 text-[20px] cursor-pointer" />
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='flex justify-between items-center'>
                            <div className="flex flex-col">
                                <span className='font-bold'>{restaurant.NAME}</span>
                                <span className=''><FontAwesomeIcon icon="fa-solid fa-location-dot" className='mr-2' />{restaurant.ADDRESS}</span>
                                <span className='text-primary'>{restaurant["RESTARANT TYPE"]} <i className="text-[14px] text-red-500">({restaurant["DISH TYPE"]})</i></span>
                            </div>
                            <span className='self-start flex justify-end items-center w-[30%]'>{restaurant.RATE}<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2">
                                <img src={rate_profile} className='w-[60px] h-[25px]' />
                                <span className=''>{restaurant["NUMBER OF RATING"]}</span>
                            </div>
                            <button onClick={() => handleViewRestaurant(index)} className=' bg-primary w-[63px] h-[25px] rounded-[10px] text-[10px] px-[10px] py-[6px] text-secondary'>View</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

RestaurantSection.propTypes = {
    restaurantData: PropTypes.array.isRequired,
};

export default RestaurantSection;
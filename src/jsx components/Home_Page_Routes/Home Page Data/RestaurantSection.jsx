import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rate_profile } from "../../../assets";

const RestaurantSection = ({restaurantData}) => {

    return (
        <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-2'>
            {restaurantData && restaurantData.map((resturant, index) => (
                <div key={index} className='relative flex flex-col gap-3 justify-center items-center rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>
                    <img src={resturant.PICTURES} alt={resturant.alt} className='box_size_2 rounded-[10px] ' />
                    <FontAwesomeIcon icon="fa-regular fa-heart" className="absolute top-10 right-16 text-primary text-[20px] cursor-pointer" />
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='flex justify-between items-center'>
                            <div className="flex flex-col">
                                <span className='font-bold'>{resturant.NAME}</span>
                                <span className=''>{resturant.ADDRESS}</span>
                                <span className='text-primary'>{resturant["RESTARANT TYPE"]} <i className="text-[14px] text-red-500">({resturant["DISH TYPE"]})</i></span>
                            </div>
                            <span className='self-start'>{resturant.RATE}<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2">
                                <img src={rate_profile} className='w-[60px] h-[25px]' />
                                <span className=''>{resturant["NUMBER OF RATING"]}</span>
                            </div>
                            <button className=' bg-primary w-[63px] h-[25px] rounded-[10px] text-[10px] px-[10px] py-[6px] text-secondary'>View</button>
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
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WarningIcon2, map } from '../../../assets';
import ButtonProps from '../../Other component/Form';

const RestaurantDetails = ({ restaurantData }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const restaurant = restaurantData && restaurantData[index];
  const images = [restaurant["PICTURES"], restaurant["PICTURE 2"]]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLabelClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <section className='relative flex flex-col justify-center items-center h-full w-full'>
      <div className='w-full lg:w-[1000px]'>
        <div className='relative overflow-hidden flex flex-col'>
          <img src={images[currentImageIndex]} alt="onboarding image" className='w-full box_size_2 max-h-[400px] ' />
          <div className='absolute top-0 flex flex-col justify-between items-start box_size_2 p-[35px] max-h-[400px]'>
            <div className="flex justify-between items-center w-full text-white text-[18px]">
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-left"
                onClick={() => {
                  navigate("/home-page");
                }}
                className="cursor-pointer"
              />
              <img src={WarningIcon2} alt="warning icon" width={20} />
            </div>
            <span className="flex gap-4 self-center">
              {images.map((_, index) => (
                <label
                  key={`label${index + 1}`}
                  htmlFor={`slide${index + 1}`}
                  className={`h-2 border-2 border-solid rounded-full cursor-pointer ${index === currentImageIndex ? "bg-primary w-14" : "bg-secondary w-2"}`}
                  onClick={() => handleLabelClick(index)}
                ></label>
              ))}
            </span>
          </div>
          <span className="flex flex-col items-center justify-center mt-10">
            <h2>{restaurant.NAME}</h2>
            <p className="text-[13px] text-gray-500"><FontAwesomeIcon icon="fa-solid fa-location-dot" className='mr-2' />{restaurant.ADDRESS}</p>
          </span>
          <div className="flex justify-between py-[20px] m-[30px] bottom_border">
            <p>Star Ratings</p>
            <span className="flex gap-4">
              <span>
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className="text-primary" />
                <i className="text-black ml-2">{restaurant["NUMBER OF LIKES"]}20k</i>
              </span>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className="text-primary" />
                <i className="text-black ml-2">{restaurant["NUMBER OF DISLIKES"]}500</i>
              </span>
            </span>
          </div>
          <div className=" w-full flex flex-col gap-4 px-[30px] mt-10" >
            <h1 className="self-start text-[18px]">Room Photos</h1>
            <div className='flex items-center gap-[15px] h-[300px] w-full'>
              <img src={restaurant["PICTURES"]} alt="" className='h-full w-full max-w-[300px] rounded-[20px]' />
              <img src={restaurant["PICTURE 2"]} alt="" className='h-full w-full max-w-[300px] rounded-[20px]' />
            </div>
          </div>
          <div className="flex flex-col gap-4 px-[30px] mt-10">
            <h1 className="self-start text-[18px]">About</h1>
            <div>
              <p> {restaurant.DESCRIPTION}</p>
              <p>{restaurant["PRICE RANGE"]}</p>
              <span className='text-primary'>{restaurant["RESTARANT TYPE"]} <i className="text-[14px] text-red-500">({restaurant["DISH TYPE"]})</i></span>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-[30px] mt-10">
            <h1 className="self-start text-[18px]">View in maps</h1>
            <a href={restaurant["GOOGLE MAP LINK"]} target="_blank" rel="noopener noreferrer">
              <img src={map} alt="" className='rounded-[20px] cursor-pointer' />
            </a>
          </div>
          <div className=" flex gap-5 my-[50px] mx-[30px]">
            <ButtonProps
              label="Book Now"
              className="w-full bg-primary block mx-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

RestaurantDetails.propTypes = {
  restaurantData: PropTypes.array.isRequired,
};

export default RestaurantDetails
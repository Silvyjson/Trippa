import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { WarningIcon2, map } from '../../../assets';
import ButtonProps from '../../Other component/Form';

const ActivityDetails = ({ activityData }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const activity = activityData && activityData[index];
  const images = [activity["PICTURE 1"], activity["PICTURE 2"]]
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
          <span className="flex items-center justify-between mx-[30px] my-[20px]">
            <span className='flex flex-col'>
              <h2>{activity.NAME}</h2>
              <p className=''><FontAwesomeIcon icon="fa-solid fa-location-dot" className='mr-2' />{activity.ADDRESS}</p>
            </span>
            <p className='flex justify-end items-center self-start w-[30%]'>{activity.RATE}<FontAwesomeIcon icon="fa-solid fa-star" className='text-yellow-500' /></p>
          </span>
          <div className="flex flex-col gap-4 px-[30px]">
            <h1 className="self-start text-[18px]">About</h1>
            <div>
              <p> {activity["ACTIVITY TYPE"]}</p>
              <p>{activity["PRICE RANGE"]}</p>
            </div>
            <div className=" w-full" >
              <div className='flex flex-wrap items-center gap-[15px] w-full'>
                <img src={activity["PICTURE 1"]} alt="" className='rounded-[20px] box_size_4 min-h-[150px] min-w-[150px]' />
                <img src={activity["PICTURE 2"]} alt="" className='rounded-[20px] box_size_4 min-h-[150px] min-w-[150px]' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-[30px] mt-10">
            <h1 className="self-start text-[18px]">View in maps</h1>
            <a href={activity["GOOGLE MAP LINK"]} target="_blank" rel="noopener noreferrer">
              <img src={map} alt="" className=' rounded-[20px] cursor-pointer min-h-[180px]' />
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

ActivityDetails.propTypes = {
  activityData: PropTypes.array.isRequired,
};

export default ActivityDetails
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ActivitySection from './Home Page Data/ActivitySection';
import HotelSection from './Home Page Data/HotelSection';
import GuideSection from './Home Page Data/GuideSection';
import RestaurantSection from './Home Page Data/RestaurantSection';

const HomePage_modelProps = ({ label, index, selectedOption, handleOptions }) => {
  return (
    <button
      onClick={() => handleOptions(index)}
      className={`flex items-center justify-center h-[40px] w-auto py-[10px] px-[19px] rounded-[10px] ${selectedOption === index ? 'bg-primary text-white' : 'bg-gray_color'}`}
    >
      {label}
    </button>
  );
};

HomePage_modelProps.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectedOption: PropTypes.number.isRequired,
  handleOptions: PropTypes.func.isRequired,
};

const HomePage_model = ({ activityData, hotelData, guideData, restaurantData }) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    return parseInt(localStorage.getItem('selectedOption')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('selectedOption', selectedOption.toString());
  }, [selectedOption]);

  const handleOptions = (index) => {
    setSelectedOption(index);
  };

  return (
    <section className='mt-[148px]'>
      <div className='fixed flex items-center gap-2 p-[20px] z-20 h-[60px] w-full bg-page_color overflow-x-scroll sm:overflow-hidden lg:w-[1000px]'>
        <HomePage_modelProps
          label="Activities"
          index={0}
          selectedOption={selectedOption}
          handleOptions={handleOptions}
        />
        <HomePage_modelProps
          label="Hotels"
          index={1}
          selectedOption={selectedOption}
          handleOptions={handleOptions}
        />
        <HomePage_modelProps
          label="Guides"
          index={2}
          selectedOption={selectedOption}
          handleOptions={handleOptions}
        />
        <HomePage_modelProps
          label="Restaurants"
          index={3}
          selectedOption={selectedOption}
          handleOptions={handleOptions}
        />
      </div>
      <div>
        {selectedOption === 0 && <ActivitySection activityData={activityData} />}
        {selectedOption === 1 && <HotelSection hotelData={hotelData} />}
        {selectedOption === 2 && <GuideSection guideData={guideData} />}
        {selectedOption === 3 && <RestaurantSection restaurantData={restaurantData} />}
      </div>
    </section>
  );
};

HomePage_model.propTypes = {
  activityData: PropTypes.array.isRequired,
  hotelData: PropTypes.array.isRequired,
  guideData: PropTypes.array.isRequired,
  restaurantData: PropTypes.array.isRequired
};

export default HomePage_model;

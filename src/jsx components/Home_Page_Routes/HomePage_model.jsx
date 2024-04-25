import PropTypes from 'prop-types';
import { useState } from 'react';
import ActivitySection from './Home Page Data/ActivitySection';
import HotelSection from './Home Page Data/HotelSection';
import GuideSection from './Home Page Data/GuideSection';
import ResturantSection from './Home Page Data/ResturantSection';

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

const HomePage_model = () => {
  const [selectedOption, setSelectedOption] = useState(0);

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
        {selectedOption === 0 && <ActivitySection />}
        {selectedOption === 1 && <HotelSection />}
        {selectedOption === 2 && <GuideSection />}
        {selectedOption === 3 && <ResturantSection />}
      </div>
    </section>
  );
};

export default HomePage_model;

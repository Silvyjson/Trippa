import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { chat_icon, phone_icon } from '../../../assets';

const GuideSection = ({guideData}) => {
  const navigate = useNavigate(); 

  const handleViewProfile = (index) => {
    navigate(`/guide/${index}`);
  };

  return (
    <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px]'>
      {guideData && guideData.map((guide, index) => (
        <div key={index} className='flex flex-col items-start rounded-[10px] py-[10px] px-[15px] bg-secondary w-full h-[150px]'>
          <span className='flex justify-end text-[13px] w-full cursor-pointer' onClick={()=> handleViewProfile(index)}>View Profile</span>
          <div className='flex gap-[20px]'>
            <div className='rounded-[10px] w-[170px] h-[100px] md:w-[200px] md:h-[120px]'>
              <img src={guide['PROFILE BANNER']} className='w-full rounded-[10px] h-full' />
            </div>
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex flex-col'>
                <span className='text-[14px]' > {guide.NAME}</span>
                <span className='text-[12px] text-gray-400' > @{guide['USER NAME']}</span>
              </div>
              <div className='flex gap-[10px]'>
                <img src={phone_icon} alt="phone icon" />
                <img src={chat_icon} alt="chat icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

GuideSection.propTypes = {
  guideData: PropTypes.array.isRequired,
};

export default GuideSection;
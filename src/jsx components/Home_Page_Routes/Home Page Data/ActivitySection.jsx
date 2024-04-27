import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivitySection = ({ activityData }) => {
    const navigate = useNavigate(); 

    const handleViewActivity = (index) => {
      navigate(`/activity/${index}`);
    };

    return (
        <div className='grid grid-cols-2 justify-center items-center gap-[20px] lg:gap-[50px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-3'>
            {activityData && activityData.map((activity, index) => (
                <div key={index} className='relative flex rounded-[22px] cursor-pointer box_size' onClick={()=> handleViewActivity(index)}>
                    <img src={activity["PICTURES 1"]} alt={activity.alt} className="rounded-[22px] box_size" />
                    <FontAwesomeIcon icon="fa-solid fa-heart" className="absolute top-5 right-5 text-red-500 text-[20px] cursor-pointer" />
                    <div className="flex flex-col justify-between items-center absolute bottom-5 left-3 text-secondary text-[12px]">
                        <span className='w-full justify-end px-2 flex'>5.0<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
                        <div className="flex flex-col ">
                            <span className="text-[14px] font-bold">{activity.NAMES}</span>
                            <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {activity.ADDRESS}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

ActivitySection.propTypes = {
    activityData: PropTypes.array.isRequired,
};

export default ActivitySection
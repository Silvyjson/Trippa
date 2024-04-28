import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivitySection = ({ activityData }) => {
    const navigate = useNavigate();

    const handleViewActivity = (index) => {
        navigate(`/activity/${index}`);

        let recentViewed = JSON.parse(localStorage.getItem('recentViewed')) || [];
        const existingIndex = recentViewed.findIndex(activity => activity.id === activityData[index].id);

        if (existingIndex !== -1) {
            recentViewed.splice(existingIndex, 1);
        }

        recentViewed.unshift(activityData[index]);
        if (recentViewed.length > 4) {
            recentViewed.pop();
        }
        localStorage.setItem('recentViewed', JSON.stringify(recentViewed));
    };

    return (
        <div className='grid grid-cols-2 justify-center items-center gap-[10px] lg:gap-[50px] w-full h-full pt-[70px] pb-[120px] px-[20px] sm:grid-cols-3'>
            {activityData && activityData.map((activity, index) => (
                <div key={index} className='relative flex rounded-[22px] box_size'>
                    <img src={activity["PICTURE 1"]} alt={activity.alt} className="rounded-[22px] box_size cursor-pointer" onClick={() => handleViewActivity(index)} />
                    <FontAwesomeIcon icon="fa-regular fa-heart" className="absolute top-[10px] right-[20px]  text-red-500 text-[20px] cursor-default" />
                    <div className="flex justify-between items-center absolute bottom-0 left-0 p-[7%] w-full text-secondary text-[12px]">
                        <div className="flex flex-col w-full ">
                            <span className="text-[14px] font-bold">{activity.NAME}</span>
                            <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {activity.LOCATION}</span>
                        </div>
                        <span className='self-start flex'>{activity.RATE}<FontAwesomeIcon icon="fa-regular fa-star" className='text-[12px] cursor-pointer' /></span>
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
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";


const ActivityDetails = ({ activityData }) => {
    const { index } = useParams();
    const activity = activityData && activityData[index];
    const [counter, setCounter] = useState(1);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => (prevCounter % 2) + 1);
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [counter]);

    const handleRadioChange = (slideNumber) => {
        setCounter(slideNumber);
    };

    if (!activity) {
        return <div>Guide not found</div>;
    }

    return (
        <div className='grid grid-cols-2 justify-center items-center gap-[15px] w-full h-full py-[70px] px-[20px] sm:grid-cols-3'>
            <div key={index} className='relative overflow-hidden flex rounded-[22px] bg-highlight_purple box_size'>
                {Array.from({ length: 2 }, (_, index) => (
                    <input
                        key={`slide${index + 1}`}
                        type="radio"
                        name="slide"
                        id={`slide${index + 1}`}
                        className="slide"
                        checked={counter === index + 1}
                        onChange={() => handleRadioChange(index + 1)}
                    />
                ))}
                <div className="navigation">
                    {Array.from({ length: 2 }, (_, index) => (
                        <label key={`label${index + 1}`} htmlFor={`slide${index + 1}`}></label>
                    ))}
                </div>
                <div className='slide-container'>
                    <img src={activity["PICTURES 1"]} alt={activity.alt} className="rounded-[22px] box_size" />
                    <img src={activity["PICTURES 2"]} alt={activity.alt} className="rounded-[22px] box_size" />
                </div>
            </div>
        </div>
    )
}

ActivityDetails.propTypes = {
    activityData: PropTypes.array.isRequired,
};

export default ActivityDetails
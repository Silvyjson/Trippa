import PropTypes from 'prop-types';
import { useState } from "react";
import { useParams } from "react-router-dom";

const HotelDetails = ({ hotelData }) => {
    const { index } = useParams();
    const hotel = hotelData && hotelData[index];
    const images = [hotel["PICTURES 1"], hotel["PICTURE 2"]]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleLabelClick = (index) => {
        setCurrentImageIndex(index);
    };
    return (
        <section className='relative flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full lg:w-[1000px]'>
                <div className='relative overflow-hidden flex '>
                    <img src={images[currentImageIndex]} alt="onboarding image" className='w-full h-[500px]' />
                    <span className="flex gap-4 absolute bottom-5 left-[50%]">
                        {images.map((_, index) => (
                            <label
                                key={`label${index + 1}`}
                                htmlFor={`slide${index + 1}`}
                                className={`h-3 border-2 border-solid rounded-full cursor-pointer ${index === currentImageIndex ? "bg-primary w-14" : "bg-radioBg w-2"}`}
                                onClick={() => handleLabelClick(index)}
                            ></label>
                        ))}
                    </span>

                </div>
            </div>
        </section>
    )
}

HotelDetails.propTypes = {
    hotelData: PropTypes.array.isRequired,
};

export default HotelDetails
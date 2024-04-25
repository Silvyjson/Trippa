import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonProps from '../Other component/Form';
import { onboardingImg, onboardingImg1, onboardingImg2, onboardingImg3 } from '../../assets';

function InfoPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [onboardingImg, onboardingImg1, onboardingImg2, onboardingImg3];
    const isLastImage = currentImageIndex === images.length - 1;
    const navigate = useNavigate();

    const handleNextClick = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const handleLabelClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleGo = () => {
        navigate("/signUp-page");
    };

    return (
        <section className="flex flex-col items-center w-full h-full mt-10">
            <h1 className="font-syne font-extrabold text-[24px] h-[22vh]">Trippa</h1>
            <div className="flex flex-col items-center justify-between w-full h-[70vh]">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={images[currentImageIndex]} alt="onboarding image" width={200} height={200} />
                    <p className="font-syne font-semibold text-[20px] text-center w-[85%]">Get the latest and trendy places to visit</p>
                </div>
                <span className="flex gap-4">
                    {images.map((_, index) => (
                        <label
                            key={`label${index + 1}`}
                            htmlFor={`slide${index + 1}`}
                            className={`h-2 border-2 border-solid rounded-full cursor-pointer ${index === currentImageIndex ? "bg-primary w-14" : "bg-radioBg w-2"}`}
                            onClick={() => handleLabelClick(index)}
                        ></label>
                    ))}
                </span>
                <div className='w-full flex flex-col items-center gap-5'>
                    <ButtonProps label={isLastImage ? "Let’s Go" : "Next"}
                        onClick={isLastImage ? handleGo : handleNextClick}
                        className="bg-primary"
                    />
                    {isLastImage ? null : <h1 className="font-syne font-semibold text-[18px] text-primary cursor-pointer" onClick={() => { setCurrentImageIndex(images.length - 1) }} >Skip</h1>}
                </div>
            </div>
        </section>
    );
}

export default InfoPage;

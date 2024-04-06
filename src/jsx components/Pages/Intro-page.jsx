import { worldImg, worldImg1 } from "../../assets";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function IntroPage() {
    const [scale, setScale] = useState(1);
    const [introPage, setIntroPage] = useState(true);
    const [introPageIcon, setIntroPageIcon] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let animationFrameId;
        let timeoutId;

        const increaseSize = () => {
            setScale((prevScale) => prevScale + 0.1);
            animationFrameId = requestAnimationFrame(increaseSize);
        };

        timeoutId = setTimeout(() => {
            increaseSize();

            setTimeout(() => {
                cancelAnimationFrame(animationFrameId);
                setIntroPage(false);

                setTimeout(() => {
                    setIntroPageIcon(true);

                    setTimeout(() => {
                        navigate("/info-page");
                    }, 2000);
                }, 1000);
            }, 2000);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {introPage ? (
                <div className="flex justify-center items-center w-full h-[100vh] overflow-hidden">
                    <img
                        id="worldImg"
                        src={worldImg}
                        alt="world image"
                        style={{ transform: `scale(${scale})`, transition: "transform 0.5s" }}

                    />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center w-full h-[100vh] gap-2 overflow-hidden bg-primary">
                    {introPageIcon &&
                        <img src={worldImg1} alt="world image" />
                    }
                    <h1 className="text-white font-syne font-bold text-[32px]">Trippa</h1>
                </div>
            )
            }
        </>
    );
}

export default IntroPage;

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { WarningIcon, photoIcon } from "../../../assets";
import ButtonProps from "../../Other component/Form"

const GuideDetails = ({ guideData }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const guide = guideData && guideData[index];
  const box_model = ["", "", ""];

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <section className='relative flex flex-col justify-center items-center h-full w-full'>
      <div className='w-full lg:w-[1000px]'>
        <div className="flex justify-between items-center p-[30px] bg-page_color fixed top-0 h-[80px] w-full text-[18px] lg:w-[1000px]">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            onClick={() => {
              navigate("/home-page/");
            }}
            className="cursor-pointer"
          />
          <img src={WarningIcon} alt="warning icon" width={20} />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mt-[90px] h-[280px]">
          <div className="flex items-center justify-center w-[124px] h-[124px] rounded-[50%] bg-radioBg">
            <img src={photoIcon} alt="photo icon" />
          </div>
          <span className="flex flex-col items-center justify-center">
            <h2>{guide.NAME}</h2>
            <p className="text-[13px] text-gray-500">@{guide['USER NAME']}</p>
          </span>
        </div>
        <div className="flex justify-between py-[20px] m-[30px] bottom_border">
          <p>Travel Experience</p>
          <span className="flex gap-4">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className="text-primary" />
              <i className="text-black ml-2">{guide["NUMBER OF LIKES"]}k</i>
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className="text-primary" />
              <i className="text-black ml-2">{guide["NUMBER OF DISLIKES"]}</i>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center px-[30px] my-[10px] h-[310px] lg:h-[350px]">
          <h1 className="self-start text-[18px] mb-[20px]">Trips the can guide you at</h1>
          <div className="h-[280px] w-full overflow-x-auto overflow-y-hidden lg:h-[300px]" >
            <div className='flex items-center gap-[15px] w-full h-full'>
              {box_model.map((item, index) => (
                <div key={index} className='flex flex-1 flex-col gap-3 rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>{item}
                  <div className=' box_size_2 bg-highlight_purple rounded-[10px]' />
                  <div className='flex flex-col gap-3 w-full'>
                    <div className='flex justify-between'>
                      <span className='w-[150px] h-[15px] bg-highlight_purple' />
                      <span className='w-[30px] h-[15px] bg-highlight_purple' />
                    </div>
                    <span className='w-[150px] h-[15px] bg-highlight_purple' />
                    <span className='w-[150px] h-[15px] bg-highlight_purple' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex gap-5 my-[50px] mx-[30px]">
          <ButtonProps
            label="Chat Now"
            className="w-full bg-primary block mx-auto"
          />
          <ButtonProps
            label="Book Now"
            className="w-full bg-primary block mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

GuideDetails.propTypes = {
  guideData: PropTypes.array.isRequired,
};

export default GuideDetails;

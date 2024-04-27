import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { WarningIcon, photoIcon } from "../../assets";
import ButtonProps from "../Other component/Form"
import axios from 'axios';

const User_ProfilePage = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const box_model = ["", "", ""];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://trippa-fp9c.onrender.com/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserProfile(response.data.user);
        console.log('User Profile Response:', response.data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <section className='relative flex flex-col justify-center items-center h-full w-full'>
      <div className='w-full lg:w-[1000px]'>
        <div className="flex justify-between items-center p-[30px] bg-page_color fixed top-0 h-[80px] w-full text-[18px] lg:w-[1000px]">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            onClick={() => {
              navigate("/home-page");
            }}
            className="cursor-pointer"
          />
          <img src={WarningIcon} alt="warning icon" width={20} />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mt-[90px] h-[280px] cursor-pointer">
          <div className="flex items-center justify-center w-[124px] h-[124px] rounded-[50%] bg-radioBg">
            <img src={photoIcon} alt="photo icon" />
          </div>
          {userProfile &&
            <>
              <h2>{userProfile.firstname}{userProfile.lastname}</h2>
              <p>{userProfile.role}</p>
            </>
          }
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mt-[10px] px-[30px] h-[310px] lg:h-[350px]">
          <p className="self-start">Recent Trips</p>
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
        <div className="mt-[20px] px-[30px]">
          <h1>Bio<FontAwesomeIcon icon="fa-solid fa-pencil " className="ml-2" /></h1>
          <textarea name="" id="" cols="30" rows="10" className="w-full text_area"></textarea>
        </div>
        <ButtonProps
          label="Edit Profile"
          className="w-full bg-primary m-[30px] block mx-auto"
        />
      </div>
    </section>
  );
};

export default User_ProfilePage;

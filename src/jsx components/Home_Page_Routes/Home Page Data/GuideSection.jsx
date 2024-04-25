import { chat_icon, phone_icon } from '../../../assets';
// import { useHistory } from 'react-router-dom';

const GuideSection = () => {
  // const history = useHistory();

  const guideData = [
    {
      "NAME": "ZAINAB IBRAHIM",
      "USER NAME": "Z TOURS",
      "PROFILE PIC ": "https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600",
      "PROFILE BANNER": "https://images.pexels.com/photos/3063910/pexels-photo-3063910.jpeg?auto=compress&cs=tinysrgb&w=600",
      "NUMBER OF LIKES": 40
    },
    {
      "NAME": "OLAMIDE AYOOLA",
      "USER NAME": "OLA'S ABUJA",
      "PROFILE PIC ": "https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=600",
      "PROFILE BANNER": "https://images.pexels.com/photos/2802809/pexels-photo-2802809.jpeg?auto=compress&cs=tinysrgb&w=600",
      "NUMBER OF LIKES": 20
    },
    {
      "NAME": "FLORENCE EZE",
      "USER NAME": "FLO THE ADVENTURA",
      "PROFILE PIC ": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=600",
      "PROFILE BANNER": "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600",
      "NUMBER OF LIKES": 30
    },
    {
      "NAME": "OMOTARA LOVE",
      "USER NAME": "TARA CITY GUIDE",
      "PROFILE PIC ": "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=600",
      "PROFILE BANNER": "https://images.pexels.com/photos/2975151/pexels-photo-2975151.jpeg?auto=compress&cs=tinysrgb&w=600",
      "NUMBER OF LIKES": 56
    },
    {
      "NAME": "SAM ADEBAYO",
      "USER NAME": "SEE WITH SAM",
      "PROFILE PIC ": "https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=600",
      "PROFILE BANNER": "https://images.pexels.com/photos/1808103/pexels-photo-1808103.jpeg?auto=compress&cs=tinysrgb&w=600",
      "NUMBER OF LIKES": 98
    }
  ];

  const handleViewProfile = () => {
    // const guide = guideData[index];
    // history.push(`/view-profile/${index}`, { guideData: guide });
  }

  return (
    <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[70px] pb-[120px] px-[20px]'>
      {guideData.map((guide, index) => (
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

export default GuideSection;
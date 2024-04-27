import { useState } from 'react'
import Footer_nav from '../Navigations/Footer_nav';
import { useNavigate } from 'react-router-dom';
import Return_Arrow from '../Navigations/Return_Arrow';


const NotificationPage = () => {
    const notification_box_model = ["", ""];
    const notification = ["All", "Unread(2)"]
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate();

    const handleSelectNotificationOption = (index) => {
        setSelected(index)
    }

    const handleViewMessage = () => {
        navigate('/view_message-page');
    }

    return (
        <section className='relative flex flex-col justify-center items-center h-full w-full'>
            <Return_Arrow/>
            <div className='w-full lg:w-[1000px]'>
                <div className='flex fixed top-[90px] w-full px-[30px] lg:w-[1000px]'>
                    {notification.map((item, index) => (
                        <span key={index} onClick={() => handleSelectNotificationOption(index)} className={`w-full h-[37px] p-[10px] flex justify-center items-center cursor-pointer ${selected === index ? 'bottom_border' : ''}`}>
                            <h1>{item}</h1>
                        </span>
                    ))}
                </div>
                {/* <div className='flex flex-col justify-center items-center gap-[30px] w-full h-full px-[30px] mt-[160px]'>
                    {notification_box_model.map((item, index) => (
                        <div key={index} onClick={() => { handleViewMessage(index) }} className='flex items-center py-[10px] h-[66px] w-full rounded-[10px] cursor-pointer'>{item}
                            <span className='flex items-center justify-between w-full'>
                                <div className='flex gap-2'>
                                    <img className='w-[46px] h-[46px] bg-highlight_purple rounded-[50%]' />
                                    <div className='flex flex-col gap-3'>
                                        <span className='w-[150px] h-[15px] bg-highlight_purple' />
                                        <span className='w-[100px] h-[15px] bg-highlight_purple' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 items-end'>
                                    <span className='w-[30px] h-[15px] bg-highlight_purple' />
                                </div>
                            </span>
                        </div>
                    ))}
                </div> */}
                <div className='w-full lg:w-[1000px]'>
                    <Footer_nav />
                </div>
            </div>
        </section>
    )
}

export default NotificationPage;
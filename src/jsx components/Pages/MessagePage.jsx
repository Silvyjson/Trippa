import Footer_nav from '../Navigations/Footer_nav';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from 'react-router-dom';
import Return_Arrow from '../Navigations/Return_Arrow';


const MessagePage = () => {
    // const message_box_model = ["", ""];
    // const navigate = useNavigate();

    // const handleViewMessage = () => {
    //     navigate("/view_message-page");
    // }

    return (
        <section className='relative flex flex-col justify-center items-center h-full w-full'>
            <div className='w-full lg:w-[1000px]'>
                <Return_Arrow />
                {/* <div className='flex flex-col justify-center items-center gap-[30px] w-full h-full px-[30px] mt-[100px]'>
                    {message_box_model.map((item, index) => (
                        <div key={index} onClick={() => { handleViewMessage(index) }} className='flex items-center py-[10px] px-[13px] h-[66px] w-full rounded-[10px] bg-highlight_purple cursor-pointer'>{item}
                            <span className='flex items-center justify-between w-full'>
                                <div className='flex gap-2'>
                                    <img className='w-[46px] h-[46px] bg-highlight_purple rounded-[50%]' />
                                    <div className='flex flex-col gap-3'>
                                        <span className='w-[50px] h-[15px] bg-highlight_purple' />
                                        <span className='w-[100px] h-[15px] bg-highlight_purple' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 items-end'>
                                    <span className='w-[15px] h-[15px] bg-highlight_purple rounded-[50%]' />
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

export default MessagePage;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { phone_icon, send_icon } from '../../assets';
import { useNavigate } from 'react-router-dom';


const ViewMessage = () => {
    const navigate = useNavigate();
    const sender_box_model = [""];
    const reciever_box_model = [""];


    function addItem() {
        var content = document.getElementById("content");
        var newItem = document.createElement("div");
        newItem.textContent = "New Item";
        content.appendChild(newItem);
    }



    return (
        <section className='relative flex flex-col justify-center items-center h-[100%] w-full overflow-hidden'>
            <div className='w-full lg:w-[1000px]'>
                <div className='fixed flex gap-10 items-center justify-between p-[30px] bg-page_color h-[80px] w-full text-[20px] lg:w-[1000px] cap'>
                    <div className='flex gap-10 items-center'>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" onClick={() => { navigate("/message-page") }} className='cursor-pointer' />
                        <span className='flex flex-col gap-3'>
                            <span className='w-[50px] h-[15px] bg-highlight_purple' />
                            <span className='w-[100px] h-[15px] bg-highlight_purple' />
                        </span>
                    </div>
                    <img src={phone_icon} alt="phone icon" className='cursor-pointer' />
                </div>
                <div id="content" className='overflow-y-scroll flex flex-col justify-end items-end w-full h-full min-h-[550px] gap-8 mt-[80px] mb-[65px] p-[20px] cap'>
                    <div className='self-start h-[60px]'>
                        {reciever_box_model.map((item, index) => (
                            <div key={index} className='flex gap-2 items-end'>{item}
                                <div className=' w-[50px] h-[60px] flex items-start justify-center'>
                                    <img alt='' className='w-[46px] h-[46px] bg-highlight_purple rounded-[50%]' />
                                </div>
                                <span className='w-[100px] h-[41px] p-[10px] bg-highlight_purple chat_bs' />
                            </div>
                        ))}
                    </div>
                    <div className='h-[60px]'>
                        {sender_box_model.map((item, index) => (
                            <div key={index} className='flex gap-2 items-end'>{item}
                                <span className='w-[100px] h-[41px] p-[10px] bg-highlight_purple chat_br' />
                                <div className=' w-[50px] h-[60px] flex items-start justify-center'>
                                    <img alt='' className='w-[46px] h-[46px] bg-highlight_purple rounded-[50%]' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='fixed bottom-0 w-full lg:w-[1000px] cap'>
                    <div className='relative flex items-center justify-center h-[64px] px-10'>
                        <input type="text" name="text" id="text" placeholder='Type a message.....' className='rounded-[8px] h-[48px] py-[8px] pl-[10px] pr-[100px] outline-none bg-search_input_color w-full' />
                        <div onClick={addItem} className='flex items-center justify-center w-[44px] h-[44px] bg-highlight_purple rounded-[50%] cursor-pointer'>
                            <img src={send_icon} alt="send icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewMessage;
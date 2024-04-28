import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonProps from "../Other component/Form";


const Popup = ({ onClick, src, message, nav }) => {


    return (
        <section className="flex items-center justify-center absolute w-full h-[120%] top-0 lg:w-[1000px]">
            <div className="flex flex-col gap-3 justify-beyween w-full items-center bg-primary max-w-[400px] cursor-pointer h-[300px] rounded-[20px] text-secondary">
                <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-[30px] self-end mr-8 mt-5 opacity-[0.6] " onClick={onClick} />
                <div className="flex flex-col gap-3 justify-center items-center w-full">
                    <img src={src} alt="good tick" className="rounded-[50%] w-[80px] h-[50px]" />
                    <p className="text-[20px]">{message}</p>
                    <span className="inline-flex">{nav}</span>
                </div>
            </div>
        </section>
    )
}

Popup.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
}

export const LogOutPopup = ({ cancelOnClick, logoutOnclick }) => {


    return (
        <div className="flex flex-col gap-10 justify-center w-full items-center bg-secondary max-w-[300px] sm:max-w-[400px] cursor-pointer h-[200px] rounded-[20px] p-5">
            <h1 className="font-extrabold text-[20px]">Do you want to logout ?</h1>
            <div className="flex gap-3 justify-center items-center w-full">
                <ButtonProps label="Cancel" onClick={cancelOnClick} className="bg-primary" />
                <ButtonProps label="Logout" onClick={logoutOnclick} className="bg-primary" />
            </div>
        </div>
    )
}

LogOutPopup.propTypes = {
    cancelOnClick: PropTypes.func,
    logoutOnclick: PropTypes.func,
}


export default Popup;
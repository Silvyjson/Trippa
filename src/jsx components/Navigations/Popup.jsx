import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonProps from "../Other component/Form";
import { useNavigate } from "react-router-dom";


const Popup = ({ onClick, src, message, nav, className }) => {
    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col gap-3 justify-beyween w-full items-center bg-primary p-5 max-w-[300px] sm:max-w-[400px] cursor-pointer h-[200px] rounded-[20px]  text-secondary">
            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-[30px] absolute top-4 right-4 opacity-[0.6] " onClick={onClick} />
            <div className="flex flex-col gap-3 justify-center items-center w-full">
                <img src={src} alt="good tick" className={`rounded-[50%]  ${className}`} />
                <p className="text-[0.99rem] text-center">{message}</p>
                {nav &&
                    <span className="flex items-center text-red-500 text-[17px]" onClick={() => navigate('/signIn-page')}>{nav}<FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ml-2" /></span>
                }
            </div>
        </div>
    )
}

Popup.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    nav: PropTypes.string,
    className: PropTypes.string,
}

export const LogOutPopup = ({ cancelOnClick, logoutOnclick }) => {


    return (
        <div className="flex flex-col gap-10 justify-center w-full items-center bg-secondary max-w-[300px] sm:max-w-[400px] cursor-pointer h-[200px] rounded-[20px] p-5">
            <h1 className="font-extrabold text-[0.99rem]">Do you want to logout ?</h1>
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
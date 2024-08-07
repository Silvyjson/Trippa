import { useState } from "react";
import PropTypes from "prop-types";
import { passwordOn } from "../../assets";

export const InputProps = (props) => {
    const { placeholder, type, htmlFor, label, id, name, value, onChange, disabled } = props;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <span className="flex flex-col w-full max-w-[500px]">
            <label htmlFor={htmlFor} className="font-syne text-[16px]" >{label}</label>
            <input
                type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                placeholder={placeholder}
                className={`w-full h-[50px] px-2 bg-transparent outline-none border-2 border-solid border-inputBorder rounded-[8px] placeholder:text-[16px] ${!value && 'border-disable opacity-[0.4]'}`}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                required
                disabled={disabled}
                autoComplete="on"
            />
            <div className="relative">
                {type === "password" && (
                    <img
                        src={isPasswordVisible ? passwordOn : passwordOn}
                        alt="password-view-icon"
                        className={`absolute right-5 bottom-4 cursor-pointer ${!value && 'opacity-[0.4]'}`}
                        onClick={togglePasswordVisibility}
                    />
                )}
            </div>
        </span>
    );
}

InputProps.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export function LoginOption (props) {
    const { label, onClick, src } = props;

    return (
        <>
            <div className="w-full h-[55px] max-w-[500px] rounded-[8px] border-2 border-solid border-inputBorder flex items-center justify-center gap-5 cursor-pointer"
                onClick={onClick}
            >
                <img src={src} alt="logo" width={25} height={25}/>
                <p className="font-syne text-[18px]">{label}</p>
            </div>
        </>
    );
}

LoginOption.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
};

function ButtonProps (props) {
    const { label, onClick, disabled,className , type } = props;

    return (
        <>
            <button className={`w-[90%] h-[50px] max-w-[500px] rounded-[8px] text-white font-syne font-medium text-[18px] cursor-pointer ${className}`}
                onClick={onClick}
                disabled={disabled}
                type={type}
            >
                {label}
            </button>
        </>
    );
}

ButtonProps.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string,
};


export default ButtonProps;
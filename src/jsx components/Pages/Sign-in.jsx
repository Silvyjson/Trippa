import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { errorImg, facebookIcon, googleIcon } from "../../assets";
import ButtonProps, { InputProps, LoginOption } from "../Other component/Form";
import axios from "axios";
import Popup from "../Navigations/Popup";

function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSignInAuth = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://trippa-fp9c.onrender.com/api/login', formData);
            console.log('login successful:', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate("/home-page");
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setError(error.response?.data?.error?.message || 'Invalid Email or Password, Please check and try again.');
                } else {
                    setError('An unexpected error occurred. Please try again.');
                }
            } else if (error.request) {
                setError('Network error. Please check your internet connection and try again.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
            console.error('Login error:', error);
            setLoading(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <p className="flex items-center justify-center h-[100vh] w-full">
                    <FontAwesomeIcon icon="fa-solid fa-spinner" size="2x" spin />
                </p>
            ) : (
                <section className="block mx-auto w-[90%]">
                    <div className="flex flex-col gap-10 items-center">
                        <span className="flex flex-col gap-3 mt-10 sm:items-center">
                            <h1 className="font-syne font-bold text-[30px]">Welcome back to Trippa</h1>
                            <p className="font-syne text-[20px] text-textColor">Log in and don’t miss out</p>
                        </span>
                        <form className="flex flex-col gap-7 w-full items-start sm:items-center">
                            <InputProps
                                label="Email"
                                htmlFor="email"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="@email.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <InputProps
                                label="Password"
                                htmlFor="password"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="*********"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <span className="flex justify-end w-full max-w-[500px]">
                                <p className="font-syne text-[18px] text-red-600 cursor-pointer" onClick={() => { navigate("/resetPassword-page") }}>Forgot password</p>
                            </span>
                            <ButtonProps
                                label="Log in"
                                className={`w-full ${(!formData.email || !formData.password) ? 'bg-disable' : 'bg-primary'}`}
                                onClick={handleSignInAuth}
                                disabled={!formData.email || !formData.password}
                            />
                        </form>
                        <span className="flex items-center justify-center w-full">
                            <h1 className="font-syne font-bold text-[20px] text-gray_color">OR</h1>
                        </span>
                        <div className="flex flex-col gap-7 w-full items-start sm:items-center">
                            <LoginOption
                                src={facebookIcon}
                                label="Continue with Facebook"
                            />
                            <LoginOption
                                src={googleIcon}
                                label="Continue with Google"
                            />
                        </div>
                        <span className="flex items-center justify-center mb-10 w-full">
                            <p className="font-syne text-[18px]">Don’t have an account?<span className="text-primary cursor-pointer" onClick={() => { navigate("/signUp-page") }}>Sign up</span></p>
                        </span>

                        {error &&
                            <div className="fixed z-50 flex items-center justify-center h-[100vh] w-full lg:w-[1000px]">
                                <Popup
                                    src={errorImg}
                                    message={error}
                                    onClick={() => setError(false)}
                                    className="w-[100px] h-[60px]"
                                />
                            </div>
                        }
                    </div>
                </section>
            )}
        </>
    );
}

export default SignIn;

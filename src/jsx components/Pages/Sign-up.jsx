import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { facebookIcon, googleIcon } from "../../assets";
import ButtonProps, { InputProps, LoginOption } from "../Other component/Form";
import axios from "axios";

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUpAuth = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://trippa.onrender.com/api/register', formData);
            console.log('Sign up successful:', response.data);
            navigate("/home-page");
        } catch (error) {
            setError(error.response?.data?.error?.message || 'An unexpected error occurred. Please try again.');
            console.error('Sign up error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <p className="flex items-center justify-center h-[100vh] w-full">Loading...</p>
            ) : (
                <section className="block mx-auto my-10 w-[90%]">
                    <div className="flex flex-col gap-10 sm:items-center">
                        <span className="flex flex-col gap-3 sm:items-center">
                            <h1 className="font-syne font-bold text-[30px]">Welcome to Trippa</h1>
                            <p className="font-syne text-[20px] text-textColor">Sign up and start travelling the world</p>
                        </span>
                        {error && <p>{error}</p>}
                        <form className="flex flex-col gap-7 w-full items-start sm:items-center">
                            <InputProps
                                label="Email"
                                htmlFor="email"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <InputProps
                                label="Password"
                                htmlFor="password"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <ButtonProps
                                label="Sign up"
                                className={`w-full ${(!formData.email || !formData.password) ? 'bg-disable' : 'bg-primary'}`}
                                onClick={handleSignUpAuth}
                                disabled={!formData.email || !formData.password}
                            />
                        </form>
                        <p className="font-syne text-[18px] sm:text-center">
                            By creating an account, you agree with our Terms of Service and Privacy Policy.
                        </p>
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
                        <span className="flex items-center justify-center w-full">
                            <p className="font-syne text-[18px]">Already have an account? <span className="text-primary cursor-pointer" onClick={() => { navigate("/signIn-page") }}>Log in</span></p>
                        </span>
                    </div>
                </section>
            )}
        </>
    );
}

export default SignUp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { facebookIcon, googleIcon } from "../../assets";
import ButtonProps, { InputProps, LoginOption } from "../Other component/Form";
import axios from "axios";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignInAuth = async (event) => {
        event.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post('https://trippa-0a55.onrender.com/api/v1/login',
                {
                    email: email,
                    password: password
                }
            )
            console.log('login sucessful:', response.data)
            navigate('/home-page')
        } catch (error) {
            setError(error.response.data);
            console.error(error.response.data);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading ? (
                <p>loading...</p>
            ) : (
                <section className="block mx-auto my-10 w-[90%]">
                    <div className="flex flex-col gap-10 sm:items-center">
                        <span className="flex flex-col gap-3 sm:items-center">
                            <h1 className="font-syne font-bold text-[30px]">Welcome back to Trippa</h1>
                            <p className="font-syne text-[20px] text-textColor">Log in and don’t miss out</p>
                        </span>
                        {error &&
                            <p>{error.response.data.error.message}</p>
                        }
                        <form className=" flex flex-col gap-7 w-full items-start sm:items-center">
                            <InputProps
                                label="Email"
                                htmlFor="email"
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                placeholder="@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputProps
                                label="Password"
                                htmlFor="password"
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                placeholder="*********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="flex justify-end w-full max-w-[500px]">
                                <p className="font-syne text-[18px] text-red-600 cursor-pointer" onClick={() => { navigate("/resetPassword-page") }}>Forgot password</p>
                            </span>
                            <ButtonProps
                                label="Log in"
                                className={`w-full ${(!email || !password) ? 'bg-disable' : 'bg-primary'}`}
                                onClick={handleSignInAuth}
                                disabled={!email || !password}
                            />
                        </form>
                        <span className="flex items-center justify-center w-full">
                            <h1 className="font-syne font-bold text-[20px] text-textColor1">OR</h1>
                        </span>
                        <div className=" flex flex-col gap-7 w-full items-start sm:items-center">
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
                            <p className="font-syne text-[18px]">Don’t have an account?<span className="text-primary cursor-pointer" onClick={() => { navigate("/signUp-page") }}>Sign up</span></p>
                        </span>
                    </div>
                </section>
            )}
        </>
    );
}

export default SignIn;
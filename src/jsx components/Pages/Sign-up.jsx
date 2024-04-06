import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { facebookIcon, googleIcon } from "../../assets";
import ButtonProps, { InputProps, LoginOption } from "../Other component/Form";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUpAuth = async (event) => {
        event.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post('https://trippa-0a55.onrender.com/api/v1/register',
                {
                    name: name,
                    email: email,
                    password: password
                }
            )
            console.log('sign up sucessful:', response.data)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error.message);
                console.error(error.response.data.error.message);
            } else {
                setError('An unexpected error occurred. Please try again.');
                console.error('Unexpected error:', error);
            }
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
                            <h1 className="font-syne font-bold text-[30px]">Welcome to Trippa</h1>
                            <p className="font-syne text-[20px] text-textColor">Sign up and start travelling the world</p>
                        </span>
                        {error &&
                            <p>{error.response.data.error.message}</p>
                        }
                        <form className=" flex flex-col gap-7 w-full items-start sm:items-center">
                            <InputProps
                                label="Full name"
                                htmlFor="name"
                                id="name"
                                type="name"
                                name="name"
                                value={name}
                                placeholder="Full name"
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            <ButtonProps
                                label="Sign up"
                                className={`w-full ${(!email || !password) ? 'bg-disable' : 'bg-primary'}`}
                                onClick={handleSignUpAuth}
                                disabled={!email || !password}
                            />
                        </form>
                        <p className="font-syne text-[18px] sm:text-center">
                            By creating an account, you agree with our Terms of Service and Privacy Policy.
                        </p>
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
                            <p className="font-syne text-[18px]">Already have an account? <span className="text-primary cursor-pointer" onClick={() => { navigate("/signIn-page") }}>Log in</span></p>
                        </span>
                    </div>
                </section>
            )}
        </>
    );
}

export default SignUp;

// hhhhhhhhhhh
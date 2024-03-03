import { useNavigate } from "react-router-dom";
import { facebookIcon, googleIcon } from "../assets";
import ButtonProps, { InputProps, LoginOption } from "./Other component/Form";

function SignUp() {
    const navigate = useNavigate();

    return (
        <section className="block mx-auto my-10 w-[90%]">
            <div className="flex flex-col gap-10 md:items-center">
                <span className="flex flex-col gap-3 md:items-center">
                    <h1 className="font-syne font-bold text-[32px]">Welcome to Trippa</h1>
                    <p className="font-syne text-[20px] text-textColor">Sign up and start travelling the world</p>
                </span>
                <form className=" flex flex-col gap-7 w-full items-start md:items-center">
                    <InputProps
                        label="Email"
                        htmlFor="email"
                        id="email"
                        type="email"
                        name="email"
                        // value={email}
                        placeholder="@email.com"
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputProps
                        label="Password"
                        htmlFor="password"
                        id="password"
                        type="password"
                        name="password"
                        // value={password}
                        placeholder="*********"
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    <ButtonProps
                        label="Sign up"
                        className="w-full"
                        disabled
                    />
                </form>
                <p className="font-syne text-[18px]">
                    By creating an account, you agree with our Terms of Service and Privacy Policy.
                </p>
                <span className="flex items-center justify-center w-full">
                    <h1 className="font-syne font-bold text-[20px] text-textColor1">OR</h1>
                </span>
                <div className=" flex flex-col gap-7 w-full items-start md:items-center">
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
                    <p className="font-syne text-[18px]">Already have an account? <span className="text-primary" onClick={() => { navigate("/signIn-page") }}>Log in</span></p>
                </span>
            </div>
        </section>
    );
}

export default SignUp;
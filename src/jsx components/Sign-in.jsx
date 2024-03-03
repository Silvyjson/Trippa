import { useNavigate } from "react-router-dom";
import { facebookIcon, googleIcon } from "../assets";
import ButtonProps, { InputProps, LoginOption } from "./Other component/Form";

function SignIn() {
    const navigate = useNavigate();

    return (
        <section className="block mx-auto my-10 w-[90%]">
            <div className="flex flex-col gap-10 md:items-center">
                <span className="flex flex-col gap-3 md:items-center">
                    <h1 className="font-syne font-bold text-[32px]">Welcome back to Trippa</h1>
                    <p className="font-syne text-[20px] text-textColor">Log in and don’t miss out</p>
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
                    <span className="flex justify-end w-full">
                        <p className="font-syne font-bold text-[18px] text-red-600" onClick={() => { navigate("/resetPassword-page") }}>Forgot password</p>
                    </span>
                    <ButtonProps
                        label="Log in"
                        className="w-full"
                        disabled
                    />
                </form>
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
                    <p className="font-syne text-[18px]">Don’t have an account?<span className="text-primary" onClick={() => { navigate("/signUp-page") }}>Sign up</span></p>
                </span>
            </div>
        </section>
    );
}

export default SignIn;
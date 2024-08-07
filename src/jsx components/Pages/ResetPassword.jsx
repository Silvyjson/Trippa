import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonProps, { InputProps } from "../Other component/Form";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    return (
        <section className="block mx-auto my-10 w-[90%]">
            <div className="flex flex-col gap-10 sm:items-center">
                <span className="flex flex-col gap-3 sm:items-center">
                    <h1 className="font-syne font-bold text-[30px]">Forgot password</h1>
                    <p className="font-syne text-[20px] text-textColor">Enter your email address receive reset link.</p>
                </span>
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
                    <ButtonProps
                        label="Send link"
                        className={`w-full ${!email ? 'bg-disable' : 'bg-primary'}`}
                        disabled={!email}
                    />
                </form>
                <span className="flex items-center justify-center w-full">
                    <p className="font-syne text-[18px]">Don’t have an account?<span className="text-primary cursor-pointer" onClick={() => { navigate("/signUp-page") }}>Sign up</span></p>
                </span>
            </div>
        </section>
    );
}

export default ResetPassword;
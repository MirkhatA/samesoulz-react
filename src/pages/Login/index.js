import "./index.css";

import LoginInput from "../../components/ui/LoginInput";
import AuthSubmitButton from "../../components/ui/AuthSubmitButton";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="relative max-w-sm m-auto">
                <div className="relative flex flex-col items-center">
                    <img
                        src="/icons/logo_img.png"
                        className="smallIcon"
                        alt="logo_img"
                    />
                </div>

                <div className="login-form">
                    <h1>Login</h1>

                    <form method="POST">
                        <LoginInput>Username or email...</LoginInput>
                        <LoginInput>Password...</LoginInput>
                        <AuthSubmitButton>Submit</AuthSubmitButton>
                    </form>
                </div>

                <div className="relative flex flex-col items-center">
                    <small className="already-have-account">
                        <Link to="/registration">Sign up</Link>
                    </small>
                </div>
            </div>
        </div>
    );
}

import "./index.css";

import LoginInput from "../../components/ui/LoginInput";
import AuthSubmitButton from "../../components/ui/AuthSubmitButton";
import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <div className="flex h-screen">
            <div className="relative max-w-sm m-auto">
                <small className="already-have-account">
                    <Link to="/">Back</Link>
                </small>

                <div className="relative flex flex-col items-center mb-5">
                    <img
                        src="/icons/logo_img.png"
                        className="smallIcon"
                        alt="logo_img"
                    />
                </div>

                <div className="login-form">
                    <h1>Registration</h1>

                    <form method="POST">
                        <LoginInput>First name...</LoginInput>
                        <LoginInput>Last name...</LoginInput>
                        <LoginInput>Username...</LoginInput>
                        <LoginInput>Email...</LoginInput>
                        <LoginInput>Password...</LoginInput>
                        <LoginInput>Repeat password...</LoginInput>
                        <AuthSubmitButton>Submit</AuthSubmitButton>
                    </form>
                </div>

                <div className="relative flex flex-col items-center">
                    <small className="already-have-account">
                        <Link to="/login">Sign in</Link>
                    </small>
                </div>
            </div>
        </div>
    );
}

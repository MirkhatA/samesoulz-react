import "./index.css";

import LoginInput from "../../components/ui/LoginInput";
import AuthSubmitButton from "../../components/ui/AuthSubmitButton";

export default function Login() {
    return (
        <div className="m-auto max-w-sm h-screen">
            <img src="/icons/logo_img.png" alt="logo_img" />

            <div className="h-screen m-auto relative flex flex-col">
                <h1 className="mb-5">Login</h1>

                <form method="POST">
                    <LoginInput>Username or email...</LoginInput>
                    <LoginInput>Password...</LoginInput>
                    <AuthSubmitButton>Submit</AuthSubmitButton>
                </form>
            </div>
        </div>
    );
}

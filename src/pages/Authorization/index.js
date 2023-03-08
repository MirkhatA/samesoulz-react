import { Link } from "react-router-dom";

import "./index.css";

import AuthNavButton from "../../components/ui/AuthNavButton";

export default function Authorization() {
    return (
        <div className="flex h-screen">
            <div className="relative max-w-sm m-auto">
                <div className="relative flex flex-col items-center">
                    <img src="/icons/logo_img.png" alt="logo_img" />
                    <p className="logo-title">samesoulz</p>
                </div>

                <h1 className="mt-10 mb-10">
                    Make some soulmates by your interests
                </h1>

                <ul>
                    <li>
                        <Link to="/registration">
                            <AuthNavButton>Registration</AuthNavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <AuthNavButton>Login</AuthNavButton>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

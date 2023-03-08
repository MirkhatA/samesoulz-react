import "./index.css";
import { ReactComponent as AuthNavIcon } from "../svg/auth_button_svg.svg";

const AuthNavButton = (props) => {
    return (
        <div className="flex button">
            <AuthNavIcon />
            {props.children}
        </div>
    );
};

export default AuthNavButton;

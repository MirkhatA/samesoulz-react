import "./index.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AuthSubmitButton = (props) => {
    return (
        <button className="auth-button-submit flex justify-between">
            {props.children}
            <ArrowForwardIcon className="icon" />
        </button>
    );
};

export default AuthSubmitButton;

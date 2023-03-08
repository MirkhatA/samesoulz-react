import "./index.css";
import { ReactComponent as AuthEditIcon } from "../svg/auth_edit_svg.svg";

const LoginInput = (props) => {
    return (
        <div className="input flex">
            <AuthEditIcon />
            <input type="text" placeholder={props.children}/>
        </div>
    );
};

export default LoginInput;

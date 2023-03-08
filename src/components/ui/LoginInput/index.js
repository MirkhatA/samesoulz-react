import "./index.css";
import { ReactComponent as AuthEditIcon } from "../svg/auth_edit_svg.svg";

const LoginInput = (props) => {
    return (
       

        <label className="input flex">
            <AuthEditIcon />
            <input type="text" placeholder={props.children}/>
        </label>
    );
};

export default LoginInput;

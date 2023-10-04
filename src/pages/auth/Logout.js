import deleteCookie from "../../utils/deleteCookie";
import NotifySuccess from "../../utils/notifications/NotifySuccess";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();

    deleteCookie("token");
    NotifySuccess("Your have been signed out!");
    navigate('/login');

    return;
};

export default Logout;
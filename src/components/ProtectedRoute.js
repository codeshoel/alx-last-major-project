import { Navigate} from 'react-router-dom';
import getCookie from '../utils/getCookie';

const ProtectedRoute = ({children, isLoggedIn}) => {

    if(getCookie("token") !== undefined) {
        isLoggedIn = true;
      }

    return isLoggedIn ? children : <Navigate to="/auth/login" />;
}

export default ProtectedRoute;
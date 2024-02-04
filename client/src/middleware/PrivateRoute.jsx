import { useEffect } from "react";
import isValidUser from '../utils/isValidUser';
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, accessToken, isValidAuth } = isValidUser();

    useEffect(() => {
        if (!isValidAuth) {
            navigate('/auth/sign-in');
        }
        if ((user?.is_superuser || user?.is_staff) && location.pathname == '/favorite') {
            navigate('/')
        }
    }, [accessToken, user, isValidAuth]);

    return isValidAuth ? element : null;
};

export default PrivateRoute;

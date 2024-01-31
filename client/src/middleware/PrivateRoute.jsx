import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isValidUser from '../utils/isValidUser';

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();
    const { user, accessToken, isValidAuth } = isValidUser();

    // useEffect(() => {
    //     if (!isValidAuth) {
    //         navigate('/auth/sign-in');
    //     }
    // }, [accessToken, user, isValidAuth]);

    // return isValidAuth ? element : null;
    return element;
};

export default PrivateRoute;

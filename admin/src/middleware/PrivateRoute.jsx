import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isValidUser from '../utils/isValidUser';

const userHasRequiredRoles = (user, requiredRoles) => {
    return requiredRoles.some(role => 
        (role === 'moderator' && user.is_staff) ||
        (role === 'admin' && user.is_superuser)
    );
};

const PrivateRoute = ({ element, requiredRoles }) => {
    const navigate = useNavigate();
    const { user, accessToken, isValidAuth } = isValidUser();

    useEffect(() => {
        if (!isValidAuth) {
            navigate('/auth/sign-in');
        } else if (requiredRoles && requiredRoles.length > 0 && !userHasRequiredRoles(user, requiredRoles)) {
            navigate('/unauthorized');
        }
    }, [accessToken, user, isValidAuth, requiredRoles]);

    return isValidAuth ? element : null;
};

export default PrivateRoute;

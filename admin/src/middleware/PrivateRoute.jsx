import { Route } from "react-router-dom"

const PrivateRoute = ({ ...props }) => {
    //TODO: handle route protection logic
    return (
        <Route {...props} />
    )
}

export default PrivateRoute
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center p-10 bg-[#001220]"><span className="loading loading-spinner text-warning"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
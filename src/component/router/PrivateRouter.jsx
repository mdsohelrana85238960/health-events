import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user,loading} =useContext(AuthContext);
    if (loading) {
        return <div className="text-center mt-56"><span className="loading loading-spinner text-secondary"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRouter;
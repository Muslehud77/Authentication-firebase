
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { useContext } from 'react';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return (
          <div className='h-screen flex justify-center items-center'>
            <progress className="progress w-56"></progress>
          </div>
        );
    }

    if(user){
        return children
    }

   return ( 
   <Navigate to='/login'></Navigate>
   )
};

PrivateRoute.propTypes = {
    children : PropTypes.node
}

export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl'>Hello {user?.displayName}!</h1>
            <h2 className='text-3xl'>Email: {user?.email}</h2>
        </div>
    );
};

export default Dashboard;
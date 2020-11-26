import React from 'react';

const UserHoc = (WrappedComponent,WrappedComponent2, arg1) => {
    return (props) => (
        <>
            {arg1}
            <WrappedComponent2/>
            <WrappedComponent {...props}/>
        </>
    )
}

export default UserHoc;
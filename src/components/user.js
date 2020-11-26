import React from 'react';

import UserHoc from '../hoc/userHoc';

const User = (props) => {
    console.log(props)
    return(
        <div>
            User
        </div>
    )
}

const User2 = () => {
    return(
        <div>
            User 2
        </div>
    )
}

export default UserHoc(User,User2,'Hello iam');
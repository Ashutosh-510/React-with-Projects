import React from "react";
import UserContext from "./userContext";

// children is an generic name that shows th flow of the props or components , we can name any as per our choice .
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
import React, { useState } from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const getUser = () => {
        let response = localStorage.getItem("user");
        setCurrentUser(response);
    }
    
    return (
        <CurrentUserContext.Provider value={{ currentUser, getUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
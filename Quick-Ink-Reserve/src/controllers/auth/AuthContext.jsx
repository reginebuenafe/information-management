import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

const AppContextProvider = ({ children }) => {
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState({
      userEmail: '',
      userName: '',
      userAddress: '',
      number: '',
      userRole: '',
      profilePicture: '',
    });
    return (
        <AppContext.Provider value={{ loginStatus, user, setLoginStatus, setUser }}>
            {children}
        </AppContext.Provider>
    );
}

const withUser = (Child) => (props) => {
    <AppContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </AppContext.Consumer>
};

export { AppContextProvider, withUser };
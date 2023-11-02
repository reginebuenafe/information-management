import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppContextProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState('');
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
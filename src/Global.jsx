import { useState } from 'react';

export const useAuth = () => {
    const [isLoggedIn, setisLoggedIn] = useState(() => {
        // Check if the user is already logged in from local storage
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        return storedLoggedIn ? JSON.parse(storedLoggedIn) : null;
    });

    const logIn = () => {
        setisLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };

    const logOut = () => {
        setisLoggedIn(false);
        console.log("Hello");
        localStorage.removeItem('isLoggedIn');
    };

    return { isLoggedIn, logIn, logOut };
};
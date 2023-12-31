import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

export const DataProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [user,setUser]=useState({})
  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };
  

  return (
    <DateContext.Provider value={{
       
      
       isLoading, 
       startLoading, 
       stopLoading,
       user,
       setUser,
       }}>
      {children}
    </DateContext.Provider>
  );
};
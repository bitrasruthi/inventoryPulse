import { createContext, useContext, useEffect, useState } from "react";
import { AuthControllerClient, AuthControllerQuery } from "../api/axios-client";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    // try {
    //   const { data } = await .useGetMeQuery();
    //   setUser(res.data.user);
    // } catch (error) {
    //   setUser(null);
    // }
  };

  useEffect(() => {}, []);
};

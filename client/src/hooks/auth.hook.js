import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const userStorageName = "u_data";

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    console.log("Loaded!");
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      userStorageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(userStorageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(userStorageName));
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};

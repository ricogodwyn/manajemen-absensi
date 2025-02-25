import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { authClient } from "../apiClient/apiHandler";

export default function AuthNavigate({ children }) {
  const navigate = useNavigate();
  const [IsAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  const AuthClient = async () => {
    try {
      const response = await authClient();
      console.log(response.status);
      if (response.status < 300 || response.status > 199) {
        setIsAuth(true);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    AuthClient();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking authentication
  }

  return IsAuth ? children : null; // Render children if authenticated, otherwise render nothing
}

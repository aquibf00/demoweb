import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => navigate('/', { replace: true }), [])
  return <div>Not Found Page</div>
}

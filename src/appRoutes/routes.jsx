import Register from '../pages/public/Register';
import Login from '../pages/public/Login';
import { Navigate, Route, Routes } from 'react-router';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/user/login" replace />} />
      <Route exact path="/user/login" element={<Login />} />
      <Route exact path="/user/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../components/pages/HomePage';
import RegisterPage from '../components/pages/RegisterPage';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route> 
          
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

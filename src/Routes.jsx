import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Landing from "./pages/Landing";
import Category from "./pages/Category";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

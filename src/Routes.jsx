import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import BecomeSeller from "./pages/BecomeSeller";
import AllAuctions from "./pages/AllAuctions";
import Auction from "./pages/Auction";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/all-auctions" element={<AllAuctions />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        <Route path="/become-a-seller" element={<BecomeSeller />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

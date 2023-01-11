import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
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
import HowItWorks from "./pages/HowItWorks";
import MyLots from "./pages/Dashboard/MyLots";
import MyWonLots from "./pages/Dashboard/MyWonLots";
import MyArchive from "./pages/Dashboard/MyArchive";
import MyPurchases from "./pages/Dashboard/MyPurchases";
import PersonalInformation from "./pages/Dashboard/PersonalInformation";
import MySettings from "./pages/Dashboard/MySettings";

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
          <Route path="/how-bidding-works" element={<HowItWorks />} />
        </Route>
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/my-lots" element={<MyLots />} />
            <Route path="/dashboard/my-won-lots" element={<MyWonLots />} />
            <Route path="/dashboard/my-purchases" element={<MyPurchases />} />
            <Route path="/dashboard/my-deliveries" element={<MyLots />} />
            <Route path="/dashboard/my-archive" element={<MyArchive />} />
            <Route
              path="/dashboard/personal-information"
              element={<PersonalInformation />}
            />
            <Route path="/dashboard/my-settings" element={<MySettings />} />
          </Route>
        </Route>

        <Route path="/become-a-seller" element={<BecomeSeller />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

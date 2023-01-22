import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Landing from "./pages/Landing";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import BecomeSeller from "./pages/BecomeSeller";
import AllAuctions from "./pages/AllAuctions";
import AuctionMin from "./pages/AuctionMin";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import HowItWorks from "./pages/HowItWorks";
import MyLots from "./pages/Dashboard/MyLots";
import MyWonLots from "./pages/Dashboard/MyWonLots";
import MyArchive from "./pages/Dashboard/MyArchive";
import MyPurchases from "./pages/Dashboard/MyPurchases";
import MyDeliveries from "./pages/Dashboard/MyDeliveries";
import PersonalInformation from "./pages/Dashboard/PersonalInformation";
import MySettings from "./pages/Dashboard/MySettings";
import Auction from "./pages/Auction";
import Congrats from "./pages/Congrats";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout/AdminDashboardLayout";
import AdminOverview from "./pages/AdminDashboard/Overview";
import AdminTransactions from "./pages/AdminDashboard/Transactions";
import AdminAllAuctions from "./pages/AdminDashboard/Auctions/AllAuctions";
import AdminRunningAuctions from "./pages/AdminDashboard/Auctions/RunningAuctions";
import AdminClosedAuctions from "./pages/AdminDashboard/Auctions/ClosedAuctions";
import AdminUpcomingAuctions from "./pages/AdminDashboard/Auctions/UpcomingAuctions";
import AdminAuctionWinners from "./pages/AdminDashboard/Winners";
import AdminUsers from "./pages/AdminDashboard/Users";
import AdminAllETickets from "./pages/AdminDashboard/ETicket/AllTickets";
import AdminTicket from "./pages/AdminDashboard/ETicket/Ticket";
import CreateAuction from "./pages/AdminDashboard/Auctions/CreateAuction";
import AdminAllCategories from "./pages/AdminDashboard/Categories/AllCategories";
import AdminCreateCategory from "./pages/AdminDashboard/Categories/CreateCategory";
import AdminLogin from "./pages/AdminDashboard/Login";

const AppRoutes = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/"
          element={
            <MainLayout
              isMenuActive={isMenuActive}
              setIsMenuActive={setIsMenuActive}
            />
          }
        >
          <Route
            index
            element={
              <Landing
                isMenuActive={isMenuActive}
                setIsMenuActive={setIsMenuActive}
              />
            }
          />
          <Route path="category" element={<Category />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="all-auctions" element={<AllAuctions />} />
          <Route path="auction-min" element={<AuctionMin />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="how-bidding-works" element={<HowItWorks />} />
          <Route path="auction" element={<Auction />} />
          <Route path="congrats" element={<Congrats />} />
        </Route>
        <Route path="become-a-seller" element={<BecomeSeller />} />
        <Route path="dashboard" element={<MainLayout />}>
          <Route path="" element={<DashboardLayout />}>
            <Route path="my-lots" element={<MyLots />} />
            <Route path="my-won-lots" element={<MyWonLots />} />
            <Route path="my-purchases" element={<MyPurchases />} />
            <Route path="my-deliveries" element={<MyDeliveries />} />
            <Route path="my-archive" element={<MyArchive />} />
            <Route
              path="/dashboard/personal-information"
              element={<PersonalInformation />}
            />
            <Route path="/dashboard/my-settings" element={<MySettings />} />
          </Route>
        </Route>
        <Route path="admin" element={<AdminDashboardLayout />}>
          <Route path="*" element={<Navigate to="/admin/overview" />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route
            index
            element={<Navigate to="/admin/transactions" replace />}
          />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="auctions">
            <Route path="create-auction" element={<CreateAuction />} />
            <Route path="all-auctions" element={<AdminAllAuctions />} />
            <Route path="running-auctions" element={<AdminRunningAuctions />} />
            <Route path="closed-auctions" element={<AdminClosedAuctions />} />
            <Route
              path="upcoming-auctions"
              element={<AdminUpcomingAuctions />}
            />
          </Route>
          <Route path="categories">
            <Route path="create-category" element={<AdminCreateCategory />} />
            <Route path="all-categories" element={<AdminAllCategories />} />
          </Route>
          <Route path="winners" element={<AdminAuctionWinners />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="admin-login" element={<AdminUsers />} />
          <Route path="e-tickets">
            <Route path="all-auctions" element={<AdminAllETickets />} />
            <Route path="ticket" element={<AdminTicket />} />
          </Route>
        </Route>

        <Route path="admin">
          <Route path="login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

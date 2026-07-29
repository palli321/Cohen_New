import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop"; // 👈 Import this
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Header from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Seminar from "../Pages/Seminar";
import DebtCollection from "../Pages/DebtCollection";
import NewsEvent from "../Pages/NewsEvent";
import CallCenter from "../Pages/CallCenter";
import NewsInner from "../Pages/NewsInner";
import Callinner from "../Pages/Callinner";
import DebtcollInner from "../Pages/DebtcollInner";
import Categories from "../Pages/Categories";
import Registration from "../Pages/Registration";
import Partners from "../Pages/Partners";
import Trainingpage from "../Pages/Trainingpage";
import Testimonialread from "../Pages/Testimonialread";
import Home from "../Pages/Home";
import Thankyou from "../Pages/Thankyou";
import Contact from "../Pages/Contact";
import Video from "../Pages/Video";


const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this line */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/seminar" element={<Seminar />} />
        <Route path="/debtcollection" element={<DebtCollection />} />
        <Route path="/newsevent" element={<NewsEvent />} />
        <Route path="/callcenter" element={<CallCenter />} />
        <Route path="/newsinner" element={<NewsInner />} />
        <Route path="/callinner" element={<Callinner />} />
        <Route path="/debtcollinner" element={<DebtcollInner />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/training" element={<Trainingpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/testimonialread" element={<Testimonialread />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

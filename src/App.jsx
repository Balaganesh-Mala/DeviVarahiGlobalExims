import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsSection from "./pages/Products";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import TestimonialsSection from "./pages/Testimonials.jsx";
import CertificationsSection from "./pages/Certificates.jsx";
import Footer from "./components/layout/Footer.jsx";
import ContactSection from "./pages/ContactSection.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <ProductsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CertificationsSection />
      <ContactSection/>
      <Footer />
    </BrowserRouter>
  );
}

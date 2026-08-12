import { BrowserRouter, Routes, Route } from 'react-router';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import GlobalTransfers from './pages/GlobalTransfers';
import VirtualPOS from './pages/VirtualPOS';
import BusinessSolutions from './pages/BusinessSolutions';
import Developers from './pages/Developers';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import TrustCenter from './pages/TrustCenter';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Media from './pages/Media';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="products/global-transfers" element={<GlobalTransfers />} />
          <Route path="products/virtual-pos" element={<VirtualPOS />} />
          <Route path="products/business-solutions" element={<BusinessSolutions />} />
          <Route path="developers" element={<Developers />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="security" element={<Security />} />
          <Route path="trust-center" element={<TrustCenter />} />
          <Route path="partners" element={<Partners />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="media" element={<Media />} />
          <Route path="help" element={<Help />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

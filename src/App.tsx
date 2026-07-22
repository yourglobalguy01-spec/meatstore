import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQPage';
import { Shipping } from './pages/Shipping';
import { WhyChopped } from './pages/WhyChopped';
import { Checkout } from './pages/Checkout';
import { Careers } from './pages/Careers';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { RefundPolicy } from './pages/RefundPolicy';
// Placeholders for other pages
const Recipes = () => <div className="pt-32 text-center h-screen font-heading text-4xl text-[#1F3B54]">Recipes</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/why-chopped" element={<WhyChopped />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

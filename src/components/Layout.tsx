import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SmoothScroll } from './SmoothScroll';
import { CustomCursor } from './CustomCursor';
import { CartDrawer } from './CartDrawer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <CustomCursor />
      <CartDrawer />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

import { SEO } from '../components/SEO';
import { PremiumHero } from '../components/PremiumHero';
import { HowItWorks } from '../components/HowItWorks';
import { ShopByCategory } from '../components/ShopByCategory';
import { WeeklySpecials } from '../components/WeeklySpecials';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { CuratedSelection } from '../components/CuratedSelection';
import { QualityProcess } from '../components/QualityProcess';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <main className="w-full bg-[var(--color-bg-white)] min-h-screen pt-0">
      <SEO />
      <PremiumHero />
      <HowItWorks />
      <FeaturedProducts />
      <ShopByCategory />
      <WeeklySpecials />
      <CuratedSelection />
      <QualityProcess />
      <Testimonials />
      <FAQ />
    </main>
  );
}

import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuHighlights from '../components/MenuHighlights';
import AnimatedText from '../components/AnimatedText';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MenuHighlights />
      <AnimatedText />
      <CtaSection />
    </Layout>
  );
}

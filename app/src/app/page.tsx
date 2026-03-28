import { Nav } from "@/components/Nav";
import { Hero } from "@/components/hero/Hero";
import { Stats } from "@/components/stats/Stats";
import { Works } from "@/components/works/Works";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { Reviews } from "@/components/reviews/Reviews";
import { FAQ } from "@/components/faq/FAQ";
import { CTABanner } from "@/components/cta/CTABanner";
import { Contacts } from "@/components/contacts/Contacts";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Works />
      <About />
      <Services />
      <Process />
      <Reviews />
      <FAQ />
      <CTABanner />
      <Contacts />
      <Footer />
    </>
  );
}

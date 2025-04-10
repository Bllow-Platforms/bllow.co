import { Header } from "@/components/modules/header";
import Footer from "@/components/sections/footer-section";
import MainHeroSection from "@/components/sections/main-hero-section";
// import CtaSection from "@/components/sections/cta-section";
// import DonationsDisplaySection from "@/components/sections/donations-display-section";
// import MembershipSection from "@/components/sections/membership-section";
// import ShopSection from "@/components/sections/shop-section";
// import ShowcaseWorkSection from "@/components/sections/showcase-work-section";
// import TestimonialSection from "@/components/sections/testimonial-section";
// import TopCreatorsSection from "@/components/sections/top-creators-section";
const Homepage = () => {
  return (
    <div className="">
      <Header isAuthenticated={false} />
      <MainHeroSection />
      {/* <TopCreatorsSection />
      <DonationsDisplaySection />
      <MembershipSection />
      <ShopSection />
      <ShowcaseWorkSection />
      <TestimonialSection />
      <CtaSection /> */}
      <Footer />
    </div>
  );
};

export default Homepage;

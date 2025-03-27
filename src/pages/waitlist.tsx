import { Header } from "@/components/modules/header";
import WaitlistHeroSection from "@/components/sections/waitlist-hero-section";

const Waitlist = () => {
  return (
    <div className="">
      <Header isAuthenticated={false} />
      <WaitlistHeroSection />
    </div>
  );
};

export default Waitlist;

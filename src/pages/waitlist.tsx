import { Header } from "@/components/modules/header";
import HeroNotificationCards from "@/components/modules/hero/hero-notification-cards";
import WaitlistNotificationCards from "@/components/modules/hero/waitlist-notification-cards";
import { DefaultTypography } from "@/components/modules/typography";
import { Input } from "@/components/ui/input";

const Waitlist = () => {
  return (
    <div className="">
      <Header isAuthenticated={false} />
      <section className="p-20 justify-center flex  flex-col items-center w-full min-h-screen bg-background ">
        <div className="">
          <DefaultTypography
            variant="h1"
            className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-[120px] 2xl:text-[155px] leading-tight lg:leading-[100px] 2xl:leading-[135px] font-extrabold text-white"
          >
            Join the waitlist
          </DefaultTypography>

          <div className="my-5 md:my-12">
            <Input
              type="search"
              placeholder="Enter your email address"
              className="max-w-[800px] mx-auto h-[50px] md:h-[70px] px-6 bg-white/10 border-white/10 text-white rounded-xl md:rounded-2xl placeholder:text-white/50 focus:border-white/20"
            />
          </div>
        </div>

        <div className="">
          <WaitlistNotificationCards />
        </div>
      </section>
    </div>
  );
};

export default Waitlist;

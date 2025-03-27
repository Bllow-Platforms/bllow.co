import WaitlistNotificationCards from "../modules/hero/waitlist-notification-cards";
import { DefaultTypography } from "../modules/typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const WaitlistHeroSection = () => {
  return (
    <section className="md:p-20 z-[3] justify-center flex relative  flex-col items-center w-full min-h-screen bg-background ">
      <div className="flex flex-col justify-center">
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
        <Button className="bg-white mx-auto cursor-pointer rounded-full text-background text-sm font-semibold px-8 py-6">
          Join the waitlist
        </Button>
      </div>

      <div className="absolute bottom-0 w-screen h-screen pointer-events-none overflow-hidden">
        <WaitlistNotificationCards />
      </div>
    </section>
  );
};

export default WaitlistHeroSection;

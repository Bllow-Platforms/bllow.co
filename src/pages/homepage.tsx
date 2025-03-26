import { Header } from "@/components/modules/header";
import HeroNotificationCards from "@/components/modules/hero/hero-notification-cards";
import { DefaultTypography } from "@/components/modules/typography";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
const Homepage = () => {
  return (
    <div className="">
      <Header isAuthenticated={false} />
      <div className=" w-full h-full bg-background ">
        <div className=" md:py-0  text-white">
          <div className="relative overflow-hidden">
            <div className="flex px-6 container mx-auto flex-col lg:flex-row items-center gap-4 min-h-screen pt-20 lg:pt-0">
              <div className="w-full py-8 md:py-0 space-y-6 text-center lg:text-left z-10">
                <DefaultTypography
                  variant="h1"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[120px] 2xl:text-[155px] leading-tight lg:leading-[100px] 2xl:leading-[135px] font-extrabold text-white"
                >
                  Support your creative work
                </DefaultTypography>

                <div className="w-full lg:w-[450px] mx-auto lg:mx-0">
                  <DefaultTypography
                    variant="p"
                    className="text-xl md:text-xl text-white/90 mb-8"
                  >
                    ...accept support. Start a membership. Setup a shop. It's
                    easier than you think.
                  </DefaultTypography>
                </div>

                <NavLink to={"/waitlist"} className={"block"}>
                  <Button className="bg-white cursor-pointer rounded-full text-background text-sm font-semibold px-8 py-6">
                    Join the waitlist
                  </Button>
                </NavLink>

                <DefaultTypography
                  variant="p"
                  className="font-light text-white970"
                >
                  it won't take you a minute
                </DefaultTypography>
              </div>

              <div className="absolute overflow-hidden right-0 lg:w-1/2 top-0 h-full md:z-[10] w-full opacity-50  lg:opacity-100 select-none">
                <HeroNotificationCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import { Gift, Heart } from "lucide-react";
import {
  NotificationBanner,
  NotificationCard,
} from "../modules/notification-card";
import { DefaultTypography } from "../modules/typography";
import SectionHeader from "./section-header";

const DonationsDisplaySection = () => {
  return (
    <div className="p-12 container mx-auto">
      <SectionHeader
        title="Donations"
        info="Provide your audience with a simple way to show their appreciation."
      />

      <SupportCard />
    </div>
  );
};

const SupportCard = () => {
  return (
    <div className="flex gap-6  flex-col md:flex-row py-6 items-center">
      {/* Main Support Box */}
      <div className="bg-indigo-600 relative justify-center items-center flex p-6 h-[725px] w-full md:w-1/2 rounded-3xl  text-white">
        <div className="w-full md:w-[80%] mx-auto">
          <h2 className="text-xl md:text-4xl max-w-[400px]">
            Bllow makes supporting effortless and enjoyable.
          </h2>
          <div className="bg-white relative flex-col flex h-[500px] p-6 rounded-2xl mt-4 text-gray-900">
            <div className="">
              <p className="text-lg">Support Xing</p>
              <div className="flex py-3 px-2 md:p-3 rounded-2xl bg-[#F3F2FF] items-center gap-3 mt-3">
                <span className="text-xl">💖 x</span>
                <div className="flex flex-wrap gap-3 ">
                  {[1, 2, 5, 7, 10, 20].map((num) => (
                    <button
                      key={num}
                      className="w-6 md:w-8 cursor-pointer text-xs h-6 md:h-8 rounded-full border border-indigo-400 text-indigo-400 font-semibold"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className=" absolute bottom-0 text-xs my-5 w-max bg-indigo-600 cursor-pointer text-white py-3 px-6 rounded-full">
              Support $1
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 w-full  md:w-1/2">
        <div className="bg-yellow-400 w-full h-[350px] p-6 md:p-12 rounded-3xl text-gray-900 flex items-center">
          <div className="flex flex-col gap-6">
            <NotificationCard
              className="relative md:block hidden"
              icon={<Heart color="#fff" size={30} />}
              text="10,392,9023 hearts"
            />
            <NotificationCard
              className="relative md:block hidden"
              icon={<Heart color="#fff" size={30} />}
              text="TheFullstackMechanic sent 10 Hearts"
            />

            <DefaultTypography className="text-xl max-w-[350px] text-white">
              With just a few taps, your fans can contribute (send hearts) and
              leave a message.
            </DefaultTypography>
          </div>
        </div>

        <div className="bg-[#3E3E3E] flex gap-3 flex-col justify-center w-full p-12 md:h-[350px] rounded-3xl text-white">
          <NotificationBanner
            icon={<Gift />}
            text="I enjoy and love what you do......"
            name={"Courtney Henry"}
            role={"Software Developer"}
            message={"I enjoy and love what you do......"}
            supports={"1,0982"}
          />

          <DefaultTypography className="text-xl max-w-[350px] text-white">
            Get notified of supports, and nice messages sent
          </DefaultTypography>
        </div>
      </div>
    </div>
  );
};

export default DonationsDisplaySection;

import { DefaultTypography } from "../modules/typography";
import SectionHeader from "./section-header";

const ShopSection = () => {
  return (
    <div className="">
      <div className="p-12 container mx-auto">
       <SectionHeader title="Shop" info=" Offer exclusive content or a way for fans to support you." />
        <div className="grid my-6 gap-6 min-h-[500px] md:grid-cols-6">
          <div className="bg-[#3228A3] md:col-span-4 flex flex-col rounded-2xl md:p-12">
            <DefaultTypography className="text-white px-6 pt-6 md:p-0 text-xl md:text-5xl" variant="h3">
            Your products may not fit a typical Shopify store.
            </DefaultTypography>

            <div className="p-8 flex-1 md:mt-6">
             
              <div className="">
                <img
                  src="/shop-card.png"
                //   width={300}
                  className="mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-[#fff] md:col-start-5 md:col-span-6 rounded-2xl m:p-6">
            <div className="grid justify-center gap-7">
             
            </div>
            <DefaultTypography
              className="text-xl md:text-5xl text-black max-w-[300px] py-4"
              variant="h3"
            >
             Shop is tailored for creators, from 1-1 Zoom calls to art commissions or ebooks.
            </DefaultTypography>
            <div className="grid justify-center gap-7">
              <img src="/popup-members.png" />
              <img src="/popup-earned.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;

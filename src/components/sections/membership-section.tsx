import { DefaultTypography } from "../modules/typography";

const MembershipSection = () => {
  return (
    <div>
      <div className="p-12 container mx-auto">
        <div>
          <DefaultTypography variant="h2" className="text-4xl font-bold">
            Membership
          </DefaultTypography>
          <DefaultTypography variant="p">
            Start a membership for your top fans.ion.
          </DefaultTypography>
        </div>

        <div className="grid my-6 gap-6 min-h-[500px] md:grid-cols-6">
          <div className="bg-[#fff] md:col-span-4 flex flex-col rounded-2xl p-12">
            <DefaultTypography className="text-black/40 text-4xl" variant="h3">
              Earn recurring income with monthly or yearly subscriptions.
            </DefaultTypography>

            <div className="p-8  overflow-hidden bg-gray-50 flex-1 rounded-2xl border mt-6">
              <div className="flex justify-between items-center">
                <div className="">
                  <DefaultTypography
                    variant="h4"
                    className="text-2xl font-bold"
                  >
                    Pro Membership
                  </DefaultTypography>

                  <ul className="list-disc text-sm py-2 p-3">
                    <li>Support me on a monthly basis</li>
                    <li>Access to members only contnts</li>
                    <li>Exclusivce posts and messages</li>
                  </ul>
                </div>
                <div className="">
                  <DefaultTypography variant="h3" className="text-5xl">
                    $20<span className="text-sm">/Month</span>
                  </DefaultTypography>
                </div>
              </div>

              <div className="">
                <img
                  src="/giftbox.svg"
                  width={300}
                  className="mx-auto translate-y-[30%]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-[#17C634] md:col-start-5 md:col-span-6 rounded-2xl p-6">
            <div className="grid justify-center gap-7">
                <img src="/popup-members.png" />
                <img src="/popup-earned.png" />
            </div>
            <DefaultTypography className="text-6xl text-white max-w-[300px] py-4" variant="h3">
            Offer exclusive content or a way for fans to support you.
            </DefaultTypography>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MembershipSection;

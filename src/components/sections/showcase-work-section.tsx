import { DefaultTypography } from "../modules/typography";

const ShowcaseWorkSection = () => {
  return (
    <div className="p-12 container mx-auto">
      <div>
        <DefaultTypography variant="h2" className="text-4xl font-bold">
        Posts, audio & email
        </DefaultTypography>
        <DefaultTypography variant="p">
        Showcase your finest work.
        </DefaultTypography>
      </div>

      <SupportCard />
    </div>
  );
};

const SupportCard = () => {
  return (
    <div className="flex gap-6  flex-col md:flex-row py-6 items-center">
       <div className="grid gap-6 w-full  md:w-1/2">
        <div className="bg-yellow-400 w-full h-[350px] p-12 rounded-3xl text-gray-900 flex items-center">
          <div className="flex flex-col gap-6">
          

            <DefaultTypography className="text-4xl max-w-[350px] text-white">
            Bllow makes it easy to publish free and exclusive content. 
            </DefaultTypography>
          </div>
        </div>

        <div className="bg-[#3E3E3E] flex gap-3 flex-col justify-center w-full p-12 h-[350px] rounded-3xl text-white">
         

          <DefaultTypography className="text-xl max-w-[350px] text-white">
          Try different formats such as audio, and make it members-only to drive more memberships.
          </DefaultTypography>
        </div>
      </div>

      <div className="bg-indigo-600 relative justify-center items-center flex p-6 h-[725px] w-full md:w-1/2 rounded-3xl  text-white">
      <div className="w-[80%] mx-auto">
        {/*  */}
        <video src=""controls className="w-full"></video>
      </div>
      </div>

    
    </div>
  );
};
export default ShowcaseWorkSection;

import { DefaultTypography } from "../modules/typography";
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <div className="bg-[#473DBC] py-12 md:p-12">
      <div className="container flex flex-col mx-auto gap-4 text-white p-6 md:p-12 text-center">
        <DefaultTypography variant="h2" className="text-3xl md:text-5xl font-semibold">
          Unlock Your Content's Potential Now!
        </DefaultTypography>
        <DefaultTypography
          variant="p"
          className="text-sm max-w-[500px] mx-auto"
        >
          Create, transform, and enhance all your content with powerful AI tools
          designed for creators, researchers, professionals, and educators.
        </DefaultTypography>

        <Button className="mx-auto my-4 bg-white text-background font-semibold rounded-full p-6 px-12">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;

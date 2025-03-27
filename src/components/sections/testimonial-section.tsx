import { DefaultTypography } from "../modules/typography";

const TestimonialSection = () => {
  return (
    <div>
      {" "}
      <div className="p-12 container mx-auto">
        <div>
          <DefaultTypography variant="h2" className="text-4xl font-bold">
            Testimonial
          </DefaultTypography>
          <DefaultTypography variant="p">
            Here’s what some users who have hopped on the Bllow have to say.
          </DefaultTypography>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default TestimonialSection;

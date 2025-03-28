import TestimonialCard from "../modules/testimonial";
import SectionHeader from "./section-header";

const TestimonialSection = () => {
  return (
    <div>
      <div className="p-12 container mx-auto">
        <SectionHeader
          title="Testimonial"
          info="Here’s what some users who have hopped on the Bllow have to say."
        />

        <div className="my-8 flex overflow-x-scroll snap-proximity gap-5">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

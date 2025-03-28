import { DefaultTypography } from "../modules/typography";
import SectionHeader from "./section-header";

const creators = [
  {
    name: "OriginalTimi",
    url: "studio.bllow.co",
    image:
      "https://s3-alpha-sig.figma.com/img/c666/5347/4c8c58ca88650363e7fb08ee0c19d728?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RPJqCw3~Q4FDbQMXx0CCYgV0r6CbS3KIbMvjzaXlLOhp-DXL13FNYNm8aZGjvWNyTt7q7zaqqkNnXNYeoC3gHlFWt1M~E6ldCeuuHZOxSkaf74Wo3GE73lDYCvhB~C6gydATYvd5k1VfCrNAq~R6YiNAsp5OXXP3lTtbgygBCKYeKEbiDjszzCQx6apA5y1Ck9vV5nkGJ5XeDeX2KdAOC-FPrxXYDdNAyZHnp4dZwFBSQ8Z7z8A4whOQRIOt3CqwyBLDxfmGt8hmZOrZBLpC1PFLYo06Sxk9N7zfQ9KnBbiveqIcWR0mYreipnvkBzgKArUd5qLLMWL0kC2ucWU4cg__",
  },
  {
    name: "CreativeJade",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "PixelGuru",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "CodeCanvas",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DesignMaverick",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "SketchWizard",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "VividPixels",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "NeonBrush",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "ArtsyCode",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "AbstractNova",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "PixelPioneer",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "BoldStrokes",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DynamicDoodle",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "VectorMaster",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "ShadyLines",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "GradientGuru",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "DigitalDaVinci",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "CrispEdges",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "InkyDreams",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "ColorAlchemy",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "MotionMagnet",
    url: "studio.bllow.co",
    image: "https://via.placeholder.com/150",
  },
];

const TopCreatorsSection = () => {
  return (
    <div className="p-12 container mx-auto">
      <SectionHeader title="Top Creators" />

      <div className="flex w-full gap-8 overflow-hidden my-6">
        {creators.map((creator, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url(${creator.image})`,
              }}
              className={`bg-cover bg-center w-32 shrink-0 h-28 ${
                index % 2 == 0 ? "rounded-2xl" : "rounded-full"
              } bg-gray-400`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCreatorsSection;

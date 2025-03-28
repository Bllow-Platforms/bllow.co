import { DefaultTypography } from "../modules/typography";

type Props = {
  info?: string;
  title: string;
};

const SectionHeader = (props: Props) => {
  return (
    <div>
      <DefaultTypography variant="h2" className="text-3xl md:text-6xl font-bold">
        {props.title}
      </DefaultTypography>

      {props?.info && (
        <DefaultTypography variant="p">{props.info}</DefaultTypography>
      )}
    </div>
  );
};

export default SectionHeader;

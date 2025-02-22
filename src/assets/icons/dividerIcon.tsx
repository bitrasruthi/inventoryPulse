import { IconProps } from "../../types/type";

export const DividerIcon: React.FC<IconProps> = (props) => {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 458 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1L458 1.00004" stroke="#D8D8D8" stroke-width="0.5" />
    </svg>
  );
};

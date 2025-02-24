import { FC } from "react";
interface Props {
  fill?: any;
}
const TextIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="79"
        height="25"
        viewBox="0 0 79 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="7.5"
          width="78"
          height="17"
          rx="1.5"
          fill="#F3F3F3"
          stroke="#878787"
        />
        <rect width="32" height="3" rx="1.5" fill="#222222" />
        <rect x="4" y="15" width="32" height="3" rx="1.5" fill="#222222" />
      </svg>
    </>
  );
};

export default TextIcon;

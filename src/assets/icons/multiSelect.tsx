import { FC } from "react";
interface Props {
  fill?: any;
}
const MultiSelect: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="78"
        height="26"
        viewBox="0 0 78 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" rx="1" fill="black" />
        <path
          d="M4.89783 2.58748L2.72669 4.74159C2.59898 4.86931 2.39464 4.87782 2.25841 4.75011L1.10898 3.70285C0.972754 3.57514 0.96424 3.36228 1.08344 3.22605C1.21115 3.08983 1.42401 3.08131 1.56024 3.20903L2.47126 4.04342L4.41252 2.10217C4.54874 1.96594 4.7616 1.96594 4.89783 2.10217C5.03406 2.2384 5.03406 2.45126 4.89783 2.58748Z"
          fill="white"
        />
        <rect y="20" width="6" height="6" rx="1" fill="black" />
        <path
          d="M4.89783 22.5875L2.72669 24.7416C2.59898 24.8693 2.39464 24.8778 2.25841 24.7501L1.10898 23.7029C0.972754 23.5751 0.96424 23.3623 1.08344 23.2261C1.21115 23.0898 1.42401 23.0813 1.56024 23.209L2.47126 24.0434L4.41252 22.1022C4.54874 21.9659 4.7616 21.9659 4.89783 22.1022C5.03406 22.2384 5.03406 22.4513 4.89783 22.5875Z"
          fill="white"
        />
        <rect x="0.5" y="10.5" width="5" height="5" rx="0.5" fill="white" />
        <rect x="0.5" y="10.5" width="5" height="5" rx="0.5" fill="white" />
        <rect x="0.5" y="10.5" width="5" height="5" rx="0.5" stroke="#878787" />
        <rect x="9" y="2" width="69" height="3" rx="1.5" fill="#222222" />
        <rect x="9" y="12" width="69" height="3" rx="1.5" fill="#878787" />
        <rect x="9" y="22" width="69" height="3" rx="1.5" fill="#222222" />
      </svg>
    </>
  );
};

export default MultiSelect;

import { FC } from "react";
interface Props {
  fill?: any;
}
const JobTypeIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="9" r="9" fill="#F0EDF4" />
        <path
          d="M8.62244 11.6441C8.62244 11.0302 8.8663 10.4415 9.3004 10.0074L11.8426 7.46517C12.1074 7.20041 12.5366 7.20041 12.8014 7.46517C13.0662 7.72994 13.0662 8.15921 12.8014 8.42395L10.2592 10.9662C9.8251 11.4003 9.23633 11.6441 8.62244 11.6441Z"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9782 9.24737L11.0194 8.28857"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1017 12.0362V12.322C11.1017 12.6965 10.7982 13 10.4237 13H5.67797C5.30354 13 5 12.6965 5 12.322V5.67797C5 5.30354 5.30354 5 5.67797 5H9.46493C9.64475 5 9.81719 5.07142 9.94432 5.19858L10.9031 6.15736C10.9857 6.23995 11.0448 6.34168 11.0761 6.45212"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.35596 11.6443C6.35596 11.2699 6.6595 10.9663 7.03392 10.9663C7.40835 10.9663 7.71189 11.2699 7.71189 11.6443H8.6225"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.35596 7.03369H8.38986"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.35596 8.38965H8.38986"
          stroke="black"
          strokeWidth="0.6"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default JobTypeIcon;

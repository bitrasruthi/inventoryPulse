import { FC } from "react";
interface Props {
  fill?: any;
}
const ReviewIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.65309 9.97952C10.5128 9.97952 12.0204 8.47192 12.0204 6.6122C12.0204 4.75248 10.5128 3.24487 8.65309 3.24487C6.79337 3.24487 5.28577 4.75248 5.28577 6.6122C5.28577 8.47192 6.79337 9.97952 8.65309 9.97952Z"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0341 8.99341L14.0407 12.0001"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.795898 1H9.77543"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.795898 4.36743H3.50948"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.795898 7.73462H3.15356"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.795898 11.1021H5.28934"
          stroke={fill ? fill : "#0182FC"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ReviewIcon;

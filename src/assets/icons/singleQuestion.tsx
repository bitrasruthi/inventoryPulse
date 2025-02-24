import { FC } from "react";
interface Props {
  fill?: any;
}
const SingleQuestion: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="53"
        height="28"
        viewBox="0 0 53 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 0C1.79449 0 0 1.79449 0 4C0 6.20551 1.79449 8 4 8C6.20551 8 8 6.20551 8 4C8 1.79449 6.20551 0 4 0ZM6.23559 2.94737L3.6792 5.48371C3.52882 5.63409 3.28822 5.64411 3.12782 5.49373L1.77444 4.26065C1.61404 4.11028 1.60401 3.85965 1.74436 3.69925C1.89474 3.53885 2.14536 3.52882 2.30576 3.6792L3.37845 4.66165L5.66416 2.37594C5.82456 2.21554 6.07519 2.21554 6.23559 2.37594C6.39599 2.53634 6.39599 2.78697 6.23559 2.94737Z"
          fill="#00BB54"
        />
        <rect x="14" y="3" width="39" height="3" rx="1.5" fill="#878787" />
        <rect x="14" y="13" width="39" height="3" rx="1.5" fill="#878787" />
        <rect x="14" y="23" width="39" height="3" rx="1.5" fill="#878787" />
        <circle cx="4" cy="14" r="3.5" fill="white" stroke="black" />
        <circle cx="4" cy="24" r="3.5" fill="white" stroke="black" />
      </svg>
    </>
  );
};

export default SingleQuestion;

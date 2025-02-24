import { FC } from "react";
interface Props {
  fill?: any;
}
const SingleSelect: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="78"
        height="24"
        viewBox="0 0 78 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0C1.34586 0 0 1.34586 0 3C0 4.65414 1.34586 6 3 6C4.65414 6 6 4.65414 6 3C6 1.34586 4.65414 0 3 0ZM4.67669 2.21053L2.7594 4.11278C2.64662 4.22556 2.46617 4.23308 2.34586 4.1203L1.33083 3.19549C1.21053 3.08271 1.20301 2.89474 1.30827 2.77444C1.42105 2.65414 1.60902 2.64662 1.72932 2.7594L2.53383 3.49624L4.24812 1.78196C4.36842 1.66165 4.55639 1.66165 4.67669 1.78196C4.79699 1.90226 4.79699 2.09023 4.67669 2.21053Z"
          fill="black"
        />
        <rect x="9" y="2" width="69" height="3" rx="1.5" fill="#222222" />
        <rect x="9" y="11" width="69" height="3" rx="1.5" fill="#878787" />
        <rect x="9" y="20" width="69" height="3" rx="1.5" fill="#878787" />
        <circle cx="3" cy="12" r="2.5" fill="white" stroke="#878787" />
        <circle cx="3" cy="21" r="2.5" fill="white" stroke="#878787" />
      </svg>
    </>
  );
};

export default SingleSelect;

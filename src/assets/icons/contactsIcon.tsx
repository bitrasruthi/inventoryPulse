import { FC } from "react";
interface Props {
  fill?: any;
}
const ContactsIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_823_27673)">
          <circle
            cx="16.8771"
            cy="16"
            r="15"
            fill="white"
            stroke={fill ? fill : "#878787"}
            stroke-width="2"
          />
          <path
            d="M23.0897 18.0491C23.601 18.186 23.9246 18.6892 23.8714 19.2635L23.7109 21.0686C23.6251 22.5977 22.6468 23.1853 21.4073 22.9498C15.2864 22.1481 10.6674 17.209 9.91695 10.6454C9.56605 7.94614 11.5986 8.22167 13.3594 8.00681C13.899 7.94623 14.3645 8.29519 14.4924 8.84274L14.934 10.723C15.0586 11.3358 15.3899 12.0727 14.9497 12.6717L14.2057 14.0276C14.0547 14.2575 14.0273 14.5224 14.1241 14.74C14.8596 16.3891 16.04 17.6674 17.5521 18.4607C17.752 18.5679 18.0036 18.5407 18.1987 18.3912L19.5326 17.5461C20.0765 17.0913 20.7743 17.4469 21.3392 17.5772L23.0897 18.0491Z"
            fill={fill ? fill : "#878787"}
          />
        </g>
        <defs>
          <clipPath id="clip0_823_27673">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0.877075)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default ContactsIcon;

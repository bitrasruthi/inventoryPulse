import { FC } from "react";
interface Props {
  fill?: any;
}
const LockIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="12"
        height="15"
        viewBox="0 0 12 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5.28498H9.735V3.73498C9.735 2.7444 9.34149 1.79439 8.64104 1.09394C7.9406 0.393492 6.99058 -1.52588e-05 6 -1.52588e-05C5.00942 -1.52588e-05 4.0594 0.393492 3.35896 1.09394C2.65851 1.79439 2.265 2.7444 2.265 3.73498V5.28498H2C1.46957 5.28498 0.960859 5.4957 0.585786 5.87077C0.210714 6.24584 0 6.75455 0 7.28498V13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V7.28498C12 6.75455 11.7893 6.24584 11.4142 5.87077C11.0391 5.4957 10.5304 5.28498 10 5.28498ZM3.265 3.73498C3.265 3.37582 3.33574 3.02017 3.47319 2.68835C3.61064 2.35652 3.81209 2.05502 4.06606 1.80105C4.32003 1.54708 4.62154 1.34562 4.95336 1.20817C5.28519 1.07073 5.64083 0.999985 6 0.999985C6.35917 0.999985 6.71481 1.07073 7.04664 1.20817C7.37846 1.34562 7.67997 1.54708 7.93394 1.80105C8.18791 2.05502 8.38936 2.35652 8.52681 2.68835C8.66426 3.02017 8.735 3.37582 8.735 3.73498V5.28498H3.265V3.73498ZM11 13C11 13.2652 10.8946 13.5196 10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V7.28498C1 7.01977 1.10536 6.76541 1.29289 6.57788C1.48043 6.39034 1.73478 6.28498 2 6.28498H10C10.2652 6.28498 10.5196 6.39034 10.7071 6.57788C10.8946 6.76541 11 7.01977 11 7.28498V13Z"
          fill="#816E9C"
        />
        <path
          d="M5.99999 8.46299C5.806 8.46304 5.61645 8.52101 5.45562 8.62948C5.2948 8.73795 5.17002 8.89197 5.09729 9.07181C5.02456 9.25165 5.00719 9.44911 5.0474 9.63888C5.08761 9.82865 5.18357 10.0021 5.32299 10.137V11.3225C5.32299 11.4551 5.37567 11.5823 5.46944 11.676C5.5632 11.7698 5.69038 11.8225 5.82299 11.8225H6.17699C6.3096 11.8225 6.43677 11.7698 6.53054 11.676C6.62431 11.5823 6.67699 11.4551 6.67699 11.3225V10.137C6.81641 10.0021 6.91237 9.82865 6.95258 9.63888C6.99279 9.44911 6.97542 9.25165 6.90269 9.07181C6.82996 8.89197 6.70518 8.73795 6.54436 8.62948C6.38353 8.52101 6.19398 8.46304 5.99999 8.46299Z"
          fill="#816E9C"
        />
      </svg>
    </>
  );
};

export default LockIcon;

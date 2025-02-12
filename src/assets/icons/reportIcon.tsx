import { FC } from "react";
interface Props {
  fill?: any;
}
const ReportIcon: FC<Props> = ({ fill }) => {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7091 10.0951L8.76359 1.00393C7.96901 -0.333754 6.03206 -0.335532 5.23641 1.00393L0.291126 10.0951C-0.521148 11.462 0.46227 13.1929 2.05431 13.1929H11.9455C13.5362 13.1929 14.5214 11.4634 13.7091 10.0951ZM7 11.5522C6.54779 11.5522 6.17969 11.1841 6.17969 10.7319C6.17969 10.2797 6.54779 9.91162 7 9.91162C7.45221 9.91162 7.82031 10.2797 7.82031 10.7319C7.82031 11.1841 7.45221 11.5522 7 11.5522ZM7.82031 8.271C7.82031 8.72321 7.45221 9.09131 7 9.09131C6.54779 9.09131 6.17969 8.72321 6.17969 8.271V4.16944C6.17969 3.71722 6.54779 3.34912 7 3.34912C7.45221 3.34912 7.82031 3.71722 7.82031 4.16944V8.271Z"
          fill="#333333"
        />
      </svg>
    </>
  );
};

export default ReportIcon;

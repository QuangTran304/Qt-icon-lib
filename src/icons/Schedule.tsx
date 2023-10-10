import type { SVGProps } from "react";
const SvgSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 2v3m8-3v3M3.5 9.09h17M21 17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.695 13.7h.009m-.009 3h.009m-3.709-3h.01m-.01 3h.01m-3.711-3h.01m-.01 3h.01"
    />
  </svg>
);
export default SvgSchedule;

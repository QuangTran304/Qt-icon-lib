import type { SVGProps } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 14.992 6-5.983 6 5.983"
    />
  </svg>
);
export default SvgChevronUp;

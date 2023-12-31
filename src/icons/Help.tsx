import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={props.width && Number(props.width) > 63 ? 1 : 1.5}
    {...props}
  >
    <path
      d="m13 18.43-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5h-4z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66M11.995 13.75h.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHelp;

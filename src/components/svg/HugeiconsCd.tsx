import { SVGProps } from "react";

export function HugeiconsCd(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
            >
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path>
                <path d="M6.5 15.99a6.9 6.9 0 0 0 1.43 1.51m8.096-11c.569.44 1.067.972 1.474 1.573M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></path>
            </g>
        </svg>
    );
}
export default HugeiconsCd;

export function BackgroundBlur() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 450"
            opacity="0.48"
            className="w-full h-full object-cover "
        >
            <defs>
                <filter
                    id="bbblurry-filter"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feGaussianBlur
                        stdDeviation="69"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                    ></feGaussianBlur>
                </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
                <ellipse
                    rx="44.5"
                    ry="135.5"
                    cx="465.77184781161225"
                    cy="75.6132021817294"
                    fill="hsla(19, 91%, 55%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="44.5"
                    ry="135.5"
                    cx="549.5208629261364"
                    cy="7.951844648881391"
                    fill="hsla(290, 79%, 28%, 1.00)"
                ></ellipse>
            </g>
        </svg>
    );
}
export default BackgroundBlur;

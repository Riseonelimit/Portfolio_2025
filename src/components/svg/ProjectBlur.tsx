export function ProjectBlur() {
    // className="w-full h-full object-cover "
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 450"
            opacity="0.53"
            className="w-full h-full object-cover shadow-2xl shadow-orange-400 "
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
                        stdDeviation="120"
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
                    rx="230.5"
                    ry="70"
                    cx="204.76771129261363"
                    cy="394.8465964577415"
                    fill="hsla(0, 0%, 66%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="230.5"
                    ry="70"
                    cx="255.15185604225852"
                    cy="227.17256805606323"
                    fill="hsla(0, 26%, 9%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="230.5"
                    ry="70"
                    cx="178.87351296164775"
                    cy="93.8495101928711"
                    fill="hsla(37, 91%, 55%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="230.5"
                    ry="70"
                    cx="631.7483159845525"
                    cy="360.1760753284801"
                    fill="hsla(0, 43%, 38%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="230.5"
                    ry="70"
                    cx="672.3620328036222"
                    cy="180.4261932373047"
                    fill="hsla(55, 94%, 54%, 1.00)"
                ></ellipse>
                <ellipse
                    rx="230.5"
                    ry="70"
                    cx="425.8482083407315"
                    cy="175.580376364968"
                    fill="hsla(290, 92%, 37%, 1.00)"
                ></ellipse>
            </g>
        </svg>
    );
}
export default ProjectBlur;

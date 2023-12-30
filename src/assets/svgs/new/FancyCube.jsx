import { motion } from "framer-motion";
import "../../../style/SvgStyles.css";

export default function FancyCube({
  fancySvgVariants = { initial: {}, animate: {}, transition: {} },
  classSetter,
}) {
  return (
    <motion.svg
      variants={fancySvgVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 220.5 194"
      enable-background="new 0 0 220.5 194"
      xml:space="preserve"
      className={classSetter}
      key="fancyCube"
    >
      <g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M147.9,11.6C119,20.1,90.2,29.4,61.2,38.1c0,0-0.3,0.1-0.3,0.1L60.5,38c-13.1-6.6-31.8-17.8-44.6-25.3
       c0,0-3.9-2.3-3.9-2.3C56.5,9.6,103.4,11.1,147.9,11.6L147.9,11.6z M147.7,11.6c-42.9,0.3-88.3,2-131.2,1.2c0,0,0.6-2.3,0.6-2.3
       c12.7,7.7,31.2,19.1,44.2,25.9C86.6,28.3,119.7,20.1,147.7,11.6L147.7,11.6z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M57.3,43.2c-0.1,0.3,0.7,62,0.6,62.3c0,0-0.2,0.2-0.2,0.2l-15.1,15.3c0,0-1.1,1.1-1.1,1.1l-0.4-1.5
       c-8.3-29.2-21-71.8-28.7-100.8c0,0-0.1-0.2-0.1-0.2s0-0.2,0-0.2c0-1.1,0-3.4,0.1-4.5c0,0,2,1.2,2,1.2c7,4.5,14.3,9.2,21.4,13.6
       c2.7,1.7,5.4,3.2,8.1,4.8C45.8,35.7,55.4,41.9,57.3,43.2L57.3,43.2z M57.1,43.4c-6.5-3.6-15.7-8.6-22.2-12
       c-7.2-3.9-14.8-8.5-21.8-12.7c0,0,2-1.2,2-1.2l0,2.1l-0.1-0.4c8.4,28.6,19.8,71.9,27.7,101c0,0-1.5-0.4-1.5-0.4l15.3-15.1
       C56,107.7,57.3,42.6,57.1,43.4L57.1,43.4z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M37.9,123.6l-28,28.6l-0.8,0.9c0,0,0-1.2,0-1.2c0,0-1-129.2-1-129.2L8.1,11.9c5.8,20.3,11.6,40.8,17,61.2
       C29.3,89.4,34,107.4,37.9,123.6L37.9,123.6z M37.7,123.6c-3.8-12.2-7.9-25.6-11.6-37.9c-3.5-12.1-7.6-25.5-10.9-37.6
       c-2.4-8.3-4.7-16.7-6.9-25l2.9-0.4l-1,129.2l-0.9-0.4L37.7,123.6L37.7,123.6z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M206.2,174.7c-9.2-9.5-23.1-23.6-32.5-33c0,0-0.2-0.2-0.2-0.2s0.1-0.3,0.1-0.3
       c10.5-26.5,27.4-67.9,38.2-94.7c0,0,2.3-5.7,2.3-5.7c0.1,14.3,0.4,42.4,0.4,56.6c0.2,27.9-0.8,56.2-1.3,84.1c0,0,0,0.6,0,0.6
       l-0.4-0.4C210.8,179.6,208,176.8,206.2,174.7L206.2,174.7z M206.4,174.5c1.9,2,4.7,4.8,6.7,6.8c0,0-0.4,0.2-0.4,0.2
       c-0.1-11.2-0.5-22.4-0.7-33.6c-0.5-16.2-0.6-34.1-0.6-50.4c0-10.8,0.2-39.3,0.3-50.4c0,0,2.3,0.5,2.3,0.5
       c-11.2,26.8-28.4,67.7-39.6,94.1c0,0-0.1-0.5-0.1-0.5C183.6,150.8,197.1,165.1,206.4,174.5L206.4,174.5z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M211.9,40.2c-20.7,0.1-41.6,0.9-62.4,1c0.7-1.3,15.5-27.6,16.4-29C181.4,20.6,196.9,31.1,211.9,40.2
       L211.9,40.2z M211.7,40.2c-15.1-8.3-31.2-15.8-45.9-24.6c0,0,2-0.5,2-0.5l-15.5,25.7l-0.9-1.6C171.4,39.3,191.4,40.1,211.7,40.2
       L211.7,40.2z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M209.8,44.9l-38.1,94.7c0,0-0.5,1.3-0.5,1.3s-1-1-1-1l-46-46.3c0,0-0.7-0.7-0.7-0.7s0.5-0.9,0.5-0.9
       c8.5-15.5,18.3-33,27.2-48.4C168,43.7,192.7,44.5,209.8,44.9L209.8,44.9z M209.6,45.1c-16.7,0.4-41.3,1.1-57.8,1.3
       c0,0,1.2-0.7,1.2-0.7c-6.1,11.2-13.6,24.9-19.9,35.9c0,0-6.8,11.9-6.8,11.9s-0.2-1.7-0.2-1.7l45.4,46.9l-1.6,0.3L209.6,45.1
       L209.6,45.1z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M42,125.6c5-5,10.2-10.2,15.1-15.3c0,0,0.5-0.5,0.5-0.5l0,0.7c0.5,19.7,0.7,49.3,0.9,69.3c0,0,0,2.1,0,2.1
       l-1.8-1.1l-21.9-12.6c-7.8-4.5-15.6-9.2-23.3-14C21.4,144.7,32.2,135.2,42,125.6L42,125.6z M42.2,125.8
       c-6.8,6.9-14,14.8-20.6,21.9c-2.3,2.5-4.6,4.9-6.9,7.3c0,0-0.3-2.2-0.3-2.2c12.7,7.2,30.7,18.2,43.4,26c0,0-1.8,1-1.8,1
       c0.2-20.1,0.4-49.5,0.9-69.3c0,0,0.5,0.2,0.5,0.2C52.4,115.6,47.2,120.8,42.2,125.8L42.2,125.8z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M160.6,14.1c-4.7,8.6-9,17.8-13.7,26.6c0,0-0.3,0.5-0.3,0.5l-0.6,0c-2.2,0.1-12.4,0.3-14.4,0.3
       c5.1-5.3,10.3-11,15.9-15.8C151.2,22.5,157.2,17.4,160.6,14.1L160.6,14.1z M160.4,14.3c-8.5,8.8-15.8,18.7-24.9,26.8
       c0,0-0.9-2.1-0.9-2.1l11.4,0.3l-0.9,0.5C150.1,31.2,155.5,23,160.4,14.3L160.4,14.3z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M155.8,14.2c-7.3,7.5-18.2,18.7-25.6,26.4c0,0-0.2,0.2-0.2,0.2l-0.3,0l-61,0.4l-8.4,0.1
       c17.3-5.3,34.9-10.9,52.4-15.5C124.9,22.6,143.9,17.5,155.8,14.2L155.8,14.2z M155.6,14.4c-28.3,8.9-57.9,19.1-86.4,26.8
       c0,0-0.3-2.4-0.3-2.4s61,0.8,61,0.8s-0.4,0.2-0.4,0.2C137.1,32.2,148,21.9,155.6,14.4L155.6,14.4z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M64,45.1c20.4,0.2,42.7-0.5,63.1-0.5c-11,11.2-36.8,37.4-47.5,48.3c-5.6,5.6-12.4,12.7-18.1,18.2
       c-0.2-21.7,1.1-44.2,1.4-65.9c0,0,0-0.2,0-0.2s0.2,0,0.2,0S64,45.1,64,45.1L64,45.1z M64,45.4l-0.9,0c0,0,0.2-0.2,0.2-0.2
       c0.2,20.4,1.5,41.8,1.4,62.2c0,0-2.6-1.1-2.6-1.1c2.6-2.6,5.2-5.2,7.8-7.7c14.1-13.8,40.4-39.6,54.7-53.8c0,0,0.6,1.4,0.6,1.4
       C105.4,46.1,83.7,45.3,64,45.4L64,45.4z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M202.9,182.7c-43.4,0.1-86.9,0.8-130.4,0.9c12-21.7,35.1-63.7,47-85.4c0,0,1-1.8,1-1.8l1.4,1.5
       C149,125.2,177,154.3,202.9,182.7L202.9,182.7z M202.7,182.5c-3.1-2.7-7.5-7.1-10.5-10c-23.2-22.9-49.6-49.3-72.4-72.6
       c0,0,2.4-0.3,2.4-0.3l-47.2,83.4c0,0-0.9-1.5-0.9-1.5C117,181.8,159.7,182.4,202.7,182.5L202.7,182.5z"
          />
        </g>
        <g>
          <path
          fill="var(--fancySvgFill)"
          stroke="var(--fancySvgFill)"
        strokeWidth="var(--fancySvgWidth)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
          d="M138.7,49.6c-17.5,32-56.4,102.9-74.7,135.8c0,0,0-4.4,0-4.4c-0.1-23.1-0.4-46.2-0.4-69.3c0,0,0-0.6,0-0.6
       l0.5-0.5c7.7-7.7,23.4-23.2,31.2-30.8c10.4-10.2,21-20.4,31.5-30.5c0,0,0.1-0.1,0.1-0.1s0.2,0,0.2,0
       C131.1,49.3,135,49.5,138.7,49.6L138.7,49.6z M138.5,49.8c0,0-11.3,0.4-11.3,0.4s0.3-0.1,0.3-0.1c-5,5.3-10.1,10.6-15.2,15.8
       c-14,14.6-31.7,32.5-46.1,46.9c0,0,0.5-1.1,0.5-1.1c0,23.1-0.3,46.2-0.4,69.3c0,0-2.2-0.6-2.2-0.6
       C81.7,149.6,121.4,79.4,138.5,49.8L138.5,49.8z"
          />
        </g>
      </g>
    </motion.svg>
  );
}

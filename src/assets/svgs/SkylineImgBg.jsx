import { motion } from "framer-motion";
import "../../style/About.css";

export default function SkylineImgBg ({ svgVariants }) {
  return (
    <motion.svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 500 199.8"
      enable-background="new 0 0 500 199.8"
      xml:space="preserve"
			key="skyLinesvg-bg"
      className="skyline-svg-bg"
    >
      <g>
        <motion.path
          variants={svgVariants}
          initial="initial"
          animate="animate"
          transition="transition"
          fill="none"
          stroke="var(--primaryLight)"
          strokeWidth="var(--svgStrokeWTwo)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
          M105.7,58.5c0-11.3,0-22.6,0-33.9c0-0.4-0.1-0.9-0.1-1.3"
        />
        <motion.path
          variants={svgVariants}
          initial="initial"
          animate="animate"
          transition="transition"
          fill="none"
          stroke="var(--primaryLight)"
          strokeWidth="var(--svgStrokeWTwo)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
          M2.5,199.2c0.1-2,0-2.7,0-4.8c-0.2-1.4,0.3-1.8,1.6-1.9c2.4-0.1,4.7-0.1,7-0.2c1.9,0,3.9-0.1,5.9-0.2
          c4.5-0.3,9.1-0.6,13.6-0.8l0.4-1.9c0.2-3.3,0.2-6.5,0.3-9.7c0.2-7.9,0.3-15.7,0.5-23.6c0-4.2,0.1-8.2,0.2-12.3
          c0-4.6,0.1-9.1,0.2-13.6c0-5,0.1-10.1,0.2-15.1c0.1-7.1,0.2-14.1,0.2-21.1c0-17.2,0.1-34.3,0-51.4c-0.1-3.6,0.5-3.2,3.4-3.2
          c1.5,0,1.9-0.2,1.9-1.6c0-1.5,0.1-3.2,0-4.8c-0.1-1.1,0.4-1.5,1.4-1.5c0.3,0,0.6,0,0.8,0c2,0,2.2-0.1,2.2-2.2
          c0-3.7-0.1-7.6-0.2-11.3c0-1.7,0.4-2,2-2c4.2-0.1,8.2-0.3,12.3-0.4c2.1-0.1,2.4,0.2,2.4,2.2c0,3.7,0,7.4,0,11.1
          c0,2.1,0.1,2.3,2.2,2.4c1.3,0.2,1.8,0.6,1.8,1.8c0,1.3,0,2.5,0,3.8c0,1.7,0.4,2.1,2,2.2c2.7,0.4,2.6,0.8,2.5,3.1
          c-0.3,3.7-0.6,7.4-0.8,11.1c-0.4,5.7-0.6,11.4-0.8,17.1c-0.2,5.1-0.4,10.2-0.5,15.4c-0.1,3.5-0.1,6.9-0.2,10.3
          c-0.1,5.7-0.2,11.5-0.2,17.3c0,8.6,0.1,17.1,0.2,25.7c0,6.5,0.1,13,0.2,19.6c0,2.7,0.1,5.2,0.2,7.7c0.2,5.7,0.3,11.5,0.5,17.3
          c0.1,3.6,0.3,7.2,0.5,10.8c0,0.9,0.4,1.4,1.4,1.4c0.8,0,1.7-0.1,2.6-0.1c3.8,0,7.4,0,11,0c2.4,0,4.8,0,7.2-0.1
          c1.4,0,1.7-0.3,1.8-1.5c0.4-6.6,0.8-13.3,1.1-20c0.2-5.5,0.3-11,0.5-16.5c0.3-5.9,0.5-12,0.7-17.9c0.3-5.9,0.6-12,0.7-17.9
          c0.2-9,0.3-17.9,0.3-26.9c0-6.8,0-13.5,0-20.3c0-0.4,0-0.8,0-1.2c0.1-4,0.4-8,0.4-12.1c0-1.2,0.5-1.3,1.3-1.5c0.4-0.1,0.8,0,1.2,0
          c3.5-0.1,7,0.6,10.4-0.3c0.2,0,0.3,0.1,0.5,0.1c0.9,0.1,1.6,0.2,2.5,0.2c1.9-0.1,2.3-0.7,2.3-2.3c0-2.4,0.6-2.5,2.4-2.4
          c0.8,0,1.7,0.1,2.6,0.1l0.4,0.1c0.2,0.7,0.3,1.3,0.4,2c0.1,0.5,0.2,1.1,0.4,1.5c0.4,0.7,1.2,0,1.2,1.1l0.2,1.9c0,9.7,0,19.4,0,29.1
          c0,7.7-0.1,15.5-0.2,23.3c0,6.8-0.2,13.7-0.2,20.5c-0.1,19.1-0.1,38.2-0.2,57.3l0.5,2.2c0.3,0,0.6,0.1,0.8,0.1c2,0,2.4,0,2.4-2.2
          s0.2-4.3,0.2-6.4c0.1-5.9,0.2-12,0.3-17.9c0.1-1.8,0.3-3.4,0.5-5.2l3.8-2c0-0.3,0.1-0.6,0.1-0.8c0.1-9,0.2-17.9,0.2-26.8
          c0-2.2,0.6-2.2,2.1-2.3c2.2-0.2,4.5-0.2,6.7-0.2l0.2-0.2c0.4-2.1,0.5-4.3,0.2-6.4c-0.2-1.2,0.9-2.1,2.1-2c1.8,0,3.6,0.1,5.5,0.2
          c1.6,0.1,1.8,0,1.9,1.9c0,1.9,0.1,4,0.2,6c0.1,1.2,0.6,1.5,2,1.5c1.8,0,3.4-0.2,5.2-0.2c1.9-0.1,2.3,0.4,2.4,2.3
          c0.1,3.1,0.3,6,0.4,9.1l0.3,0.2c1.7,0,3.4-0.1,5-0.1c1.5-0.1,1.8-0.5,1.9-1.9c0-1.8,0.1-3.6,0.2-5.4c0.1-1.5,0.6-1.8,1.9-1.8
          c1.1,0,2.2,0,3.3,0c2.2,0,2.3,0.1,2.6,2.2c0.3,2.4,0.1,2.5,2.7,2.5c1.7,0,2.1,0.1,2.1,2.1c0,1.7-0.1,2.1,2.1,2.1
          c1.6,0,1.9,0.5,1.9,1.9c0.1,7.2,0.2,14.4,0.2,21.5c0,6.4,0,12.8,0,19.2c0.1,2.6,0.2,5.4,0.3,8c0,0.5,0.5,1.4,0.7,1.4
          c1,0.1,2,0.1,2.9-0.2c0.3-0.2,0.4-1.1,0.4-1.8c0-10.1,0-20.3,0-30.4c0-2.5,0.5-3.1,3.1-3.2c0.4,0,1,0,1.4,0.1
          c1.7,0.3,2.4-0.3,2.4-1.9c0-5.7,0.1-11.3,0.2-16.9c0-1.1,0.8-2,1.9-2c2,0,3.8,0,5.7,0c1,0,1.4,0.5,1.4,1.6c0,1.8,0,3.4,0,5.2
          c0.1,1.6,0.4,1.8,2,1.9l7.5-0.7c0.1-1.7,0.2-3.4,0.3-5.2c0.1-2.8,0.1-5.6,0.1-8.3c0-1.8,0.3-2.2,2.2-2.2c1.8,0,3.6,0.2,5.4,0.2
          c1.6,0,1.9-0.5,1.9-1.9c0-1.8,0-3.6,0.1-5.4c0-0.8,0.4-1.4,1.4-1.5c2-0.1,3.8-0.2,5.7-0.2c1.5,0,1.8,0.4,1.8,2c0,2.2,0,4.5,0.9,6.7
          c0.2,0.7,0.6,0.7,1,0.7c2,0,3.8-0.2,5.7-0.2c2-0.1,2.2,0.2,2.2,2.2c0,16.2,0,32.5,0,48.9c0,3.5,0.3,7.1,0.5,10.6
          c0.1,1.4,0.7,1.9,2,1.9c2.9,0.1,5.8,0.3,8.8,0.2c3.3-0.3,6.6,0.1,9.8-0.8l0.2-0.1c0-0.7,0.2-1.3,0.2-1.8c0-18.8,0.1-37.8,0.2-56.8
          c0-3,0-6.2,0-9.4c0-1.7,0.4-1.9,1.9-1.9c2.4,0,4.7,0,7.1,0c1.5,0,1.9-0.5,2-1.8c0.1-1.4,0.1-2.8,0.1-4.1c0-1.8,0.4-2.2,2.2-2.3
          c1.5,0,3.2,0,4.8,0c1.7,0,2.6,0.8,2.6,2.7c0,1.1,0,2.3,0,3.5c0,1.8,0.8,2.3,2.4,2.1c1.9-0.2,4-0.4,6-0.5c1.7-0.1,2,0.4,2.2,2
          c0.2,2.2,0.6,4.5,0.9,6.8l1.2,0.4c4.8-0.1,9.8-0.3,14.6-0.4l3.3-0.7c0-0.7,0.1-1.4,0.1-2.2c0-3.3-0.2-6.7-0.2-10
          c0-11.8,0.1-23.5,0.2-35.4c0-6,0.1-11.8,0.2-17.6c0-0.2,0-0.3,0-0.4c0-0.9,0.4-1.6,1.5-1.6c1.3,0,2.5-0.1,3.7-0.2
          c3.5-0.4,6.9-0.7,10.4-0.8c6.4-0.1,12.8-0.1,19.2,0.4c1.9,0.2,2.2,0.4,2.2,2.3c0,8.3-0.1,16.7-0.2,25.2c0,5.2,0,10.6,0,16
          c0,0.7,0.1,1.4,0.2,2.2v0.1c1.9,0,4,0.2,6,0.1c1.2-0.1,2,0.6,2.1,2c0.2,4.6,0.4,9.3,0.5,13.9c0,1.8,0.2,2,2,2c9.4,0,18.8,0,28.2,0
          c0.7,0,1.1-0.2,1.5-0.9c0.6-1.1,0.5-2.2,0.4-3.3c-0.2-5.3-0.7-10.4-1-15.6c-0.2-4.4-0.4-8.9-0.5-13.4c-0.1-5-0.2-10-0.2-14.9
          c0-3.7,0.1-7.5,0.2-11.2c0-5.7,0.1-11.4,0.2-17.1c0-2.9,0.1-5.8,0.2-8.8c0-0.7,0.1-1.4,0.2-2.2s0.5-1.5,1.6-1.5
          c1.5,0,3-0.1,4.4-0.3c0.6-0.1,1.6,0,1.5-1.2c-0.2-1.8-0.3-3.6-0.5-5.5l0.2-0.9c0.6-0.4,0.7-0.4,1.4-0.5c2.2-0.4,3.1-0.1,5.3-0.3
          l0.1-0.4c0-2.4-0.1-4.8-0.1-7.2c0-0.6,0.1-0.6,0.1-1.3h0.2c1.1,0,2.3-0.1,3.4-0.2c1.4-0.2,1.8-0.5,1.8-1.8c0-0.8,0-1.7,0-2.6
          c0-1.5,0.5-1.9,1.9-2c0.5-0.1,1.5,0,1.6-0.3c0.3-0.7,0.4-1.5,0.4-2.3c-0.1-1.9-0.4-4-0.4-6.1c0-1.9,1.3-3.2,2.7-4.2
          c0.3-0.2,1.1-0.2,1.5,0c1,0.6,2,1.3,2.9,2.1c0.5,0.3,0.7,1.1,0.7,1.6c0,2.7,0,5.2,0,7.7c0,2.1,0.3,2.2,2.4,1.9l2.1,0.5
          c0.2,1.1,0.5,2.2,0.5,3.3c0,2.7,0.9,3.4,3.4,3.1c3-0.3,2.9-0.3,3.2,2.4c0.2,1.9,0.6,4,0.9,6.1h0.1c1.1,0,2.1-0.1,3.2-0.1
          c1.4,0,1.9,0.6,1.9,1.9c0,1.4-0.1,2.8,0,4.1l0.9,2.3c1.5-0.1,3-0.2,4.4-0.2c0.8,0,1.5,0.4,1.5,1.5c0,1.8,0.2,3.6,0.2,5.4
          c0.1,5.9,0.1,12,0.2,17.9c0,6.1,0.1,12.2,0.2,18.2c0,7.1,0.1,14,0.2,20.9c0,6.8,0.1,13.7,0.2,20.5c0.1,8.6,0.2,17.2,0.2,25.8
          c0.1,9.4,0,18.8,0,28.2c0,1.6,0.2,3.1,1.2,4.5c0.3,0.6,0.6,0.7,1.1,0.7c1.5-0.1,3.2-0.2,4.7-0.2c6.8,0,13.5,0.1,20.3,0.2
          c0.2,0,0.3,0,0.4,0c5,0.3,10,0.5,15,0.8c2.9,0.2,5.7,0.3,8.6,0.5c1,0,1.3,0.6,1.4,1.5c0,0.4,0.1,0.8,0.1,1.2
          c-0.3,4.6,0.1,9.1,0.1,12.9"
        />
      </g>
    </motion.svg>
  );
}

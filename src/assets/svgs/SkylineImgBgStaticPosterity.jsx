import { motion } from "framer-motion";
import "../../style/About.css";

export default function SkylineImgBgStatic ({ svgVariants, classSetter }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 300 500 200"
      enableBackground="new 0 0 500 500"
      xmlSpace="preserve"
			key="skyLinesvg-bg"
      className={classSetter}
    >
      <g>
        <path
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
		M105.6,323.5c0,0.4,0.1,0.9,0.1,1.3c0,11.3,0,22.6,0,33.9"
        />
        <path
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
		M499.2,499.2c0-3.8-0.4-8.3-0.1-12.9c0-0.4-0.1-0.8-0.1-1.2c-0.1-0.9-0.4-1.5-1.4-1.5c-2.9-0.2-5.7-0.3-8.6-0.5
		c-5-0.3-10-0.5-15-0.8c-0.1,0-0.2,0-0.4,0c-6.8-0.1-13.5-0.2-20.3-0.2c-1.5,0-3.2,0.1-4.7,0.2c-0.5,0-0.8-0.1-1.1-0.7
		c-1-1.4-1.2-2.9-1.2-4.5c0-9.4,0.1-18.8,0-28.2c0-8.6-0.1-17.2-0.2-25.8c-0.1-6.8-0.2-13.7-0.2-20.5c-0.1-6.9-0.2-13.8-0.2-20.9
		c-0.1-6-0.2-12.1-0.2-18.2c-0.1-5.9-0.1-12-0.2-17.9c0-1.8-0.2-3.6-0.2-5.4c0-1.1-0.7-1.5-1.5-1.5c-1.4,0-2.9,0.1-4.4,0.2l-0.9-2.3
		c-0.1-1.3,0-2.7,0-4.1c0-1.3-0.5-1.9-1.9-1.9c-1.1,0-2.1,0.1-3.2,0.1h-0.1c-0.3-2.1-0.7-4.2-0.9-6.1c-0.3-2.7-0.2-2.7-3.2-2.4
		c-2.5,0.3-3.4-0.4-3.4-3.1c0-1.1-0.3-2.2-0.5-3.3l-2.1-0.5c-2.1,0.3-2.4,0.2-2.4-1.9c0-2.5,0-5,0-7.7c0-0.5-0.2-1.3-0.7-1.6
		c-0.9-0.8-1.9-1.5-2.9-2.1c-0.4-0.2-1.2-0.2-1.5,0c-1.4,1-2.7,2.3-2.7,4.2c0,2.1,0.3,4.2,0.4,6.1c0,0.8-0.1,1.6-0.4,2.3
		c-0.1,0.3-1.1,0.2-1.6,0.3c-1.4,0.1-1.9,0.5-1.9,2c0,0.9,0,1.8,0,2.6c0,1.3-0.4,1.6-1.8,1.8c-1.1,0.1-2.3,0.2-3.4,0.2h-0.2
		c0,0.7-0.1,0.7-0.1,1.3c0,2.4,0.1,4.8,0.1,7.2l-0.1,0.4c-2.2,0.2-3.1-0.1-5.3,0.3c-0.7,0.1-0.8,0.1-1.4,0.5l-0.2,0.9
		c0.2,1.9,0.3,3.7,0.5,5.5c0.1,1.2-0.9,1.1-1.5,1.2c-1.4,0.2-2.9,0.3-4.4,0.3c-1.1,0-1.5,0.7-1.6,1.5c-0.1,0.8-0.2,1.5-0.2,2.2
		c-0.1,3-0.2,5.9-0.2,8.8c-0.1,5.7-0.2,11.4-0.2,17.1c-0.1,3.7-0.2,7.5-0.2,11.2c0,4.9,0.1,9.9,0.2,14.9c0.1,4.5,0.3,9,0.5,13.4
		c0.3,5.2,0.8,10.3,1,15.6c0.1,1.1,0.2,2.2-0.4,3.3c-0.4,0.7-0.8,0.9-1.5,0.9c-9.4,0-18.8,0-28.2,0c-1.8,0-2-0.2-2-2
		c-0.1-4.6-0.3-9.3-0.5-13.9c-0.1-1.4-0.9-2.1-2.1-2c-2,0.1-4.1-0.1-6-0.1v-0.1c-0.1-0.8-0.2-1.5-0.2-2.2c0-5.4,0-10.8,0-16
		c0.1-8.5,0.2-16.9,0.2-25.2c0-1.9-0.3-2.1-2.2-2.3c-6.4-0.5-12.8-0.5-19.2-0.4c-3.5,0.1-6.9,0.4-10.4,0.8c-1.2,0.1-2.4,0.2-3.7,0.2
		c-1.1,0-1.5,0.7-1.5,1.6c0,0.1,0,0.2,0,0.4c-0.1,5.8-0.2,11.6-0.2,17.6c-0.1,11.9-0.2,23.6-0.2,35.4c0,3.3,0.2,6.7,0.2,10
		c0,0.8-0.1,1.5-0.1,2.2l-3.3,0.7c-4.8,0.1-9.8,0.3-14.6,0.4l-1.2-0.4c-0.3-2.3-0.7-4.6-0.9-6.8c-0.2-1.6-0.5-2.1-2.2-2
		c-2,0.1-4.1,0.3-6,0.5c-1.6,0.2-2.4-0.3-2.4-2.1c0-1.2,0-2.4,0-3.5c0-1.9-0.9-2.7-2.6-2.7c-1.6,0-3.3,0-4.8,0
		c-1.8,0.1-2.2,0.5-2.2,2.3c0,1.3,0,2.7-0.1,4.1c-0.1,1.3-0.5,1.8-2,1.8c-2.4,0-4.7,0-7.1,0c-1.5,0-1.9,0.2-1.9,1.9
		c0,3.2,0,6.4,0,9.4c-0.1,19-0.2,38-0.2,56.8c0,0.5-0.2,1.1-0.2,1.8l-0.2,0.1c-3.2,0.9-6.5,0.5-9.8,0.8c-3,0.1-5.9-0.1-8.8-0.2
		c-1.3,0-1.9-0.5-2-1.9c-0.2-3.5-0.5-7.1-0.5-10.6c0-16.4,0-32.7,0-48.9c0-2-0.2-2.3-2.2-2.2c-1.9,0-3.7,0.2-5.7,0.2
		c-0.4,0-0.8,0-1-0.7c-0.9-2.2-0.9-4.5-0.9-6.7c0-1.6-0.3-2-1.8-2c-1.9,0-3.7,0.1-5.7,0.2c-1,0.1-1.4,0.7-1.4,1.5
		c-0.1,1.8-0.1,3.6-0.1,5.4c0,1.4-0.3,1.9-1.9,1.9c-1.8,0-3.6-0.2-5.4-0.2c-1.9,0-2.2,0.4-2.2,2.2c0,2.7,0,5.5-0.1,8.3
		c-0.1,1.8-0.2,3.5-0.3,5.2l-7.5,0.7c-1.6-0.1-1.9-0.3-2-1.9c0-1.8,0-3.4,0-5.2c0-1.1-0.4-1.6-1.4-1.6c-1.9,0-3.7,0-5.7,0
		c-1.1,0-1.9,0.9-1.9,2c-0.1,5.6-0.2,11.2-0.2,16.9c0,1.6-0.7,2.2-2.4,1.9c-0.4-0.1-1-0.1-1.4-0.1c-2.6,0.1-3.1,0.7-3.1,3.2
		c0,10.1,0,20.3,0,30.4c0,0.7-0.1,1.6-0.4,1.8c-0.9,0.3-1.9,0.3-2.9,0.2c-0.2,0-0.7-0.9-0.7-1.4c-0.1-2.6-0.2-5.4-0.3-8
		c0-6.4,0-12.8,0-19.2c0-7.1-0.1-14.3-0.2-21.5c0-1.4-0.3-1.9-1.9-1.9c-2.2,0-2.1-0.4-2.1-2.1c0-2-0.4-2.1-2.1-2.1
		c-2.6,0-2.4-0.1-2.7-2.5c-0.3-2.1-0.4-2.2-2.6-2.2c-1.1,0-2.2,0-3.3,0c-1.3,0-1.8,0.3-1.9,1.8c-0.1,1.8-0.2,3.6-0.2,5.4
		c-0.1,1.4-0.4,1.8-1.9,1.9c-1.6,0-3.3,0.1-5,0.1l-0.3-0.2c-0.1-3.1-0.3-6-0.4-9.1c-0.1-1.9-0.5-2.4-2.4-2.3c-1.8,0-3.4,0.2-5.2,0.2
		c-1.4,0-1.9-0.3-2-1.5c-0.1-2-0.2-4.1-0.2-6c-0.1-1.9-0.3-1.8-1.9-1.9c-1.9-0.1-3.7-0.2-5.5-0.2c-1.2-0.1-2.3,0.8-2.1,2
		c0.3,2.1,0.2,4.3-0.2,6.4l-0.2,0.2c-2.2,0-4.5,0-6.7,0.2c-1.5,0.1-2.1,0.1-2.1,2.3c0,8.9-0.1,17.8-0.2,26.8c0,0.2-0.1,0.5-0.1,0.8
		l-3.8,2c-0.2,1.8-0.4,3.4-0.5,5.2c-0.1,5.9-0.2,12-0.3,17.9c0,2.1-0.2,4.2-0.2,6.4s-0.4,2.2-2.4,2.2c-0.2,0-0.5-0.1-0.8-0.1
		l-0.5-2.2c0.1-19.1,0.1-38.2,0.2-57.3c0-6.8,0.2-13.7,0.2-20.5c0.1-7.8,0.2-15.6,0.2-23.3c0-9.7,0-19.4,0-29.1l-0.2-1.9
		c0-1.1-0.8-0.4-1.2-1.1c-0.2-0.4-0.3-1-0.4-1.5c-0.1-0.7-0.2-1.3-0.4-2l-0.4-0.1c-0.9,0-1.8-0.1-2.6-0.1c-1.8-0.1-2.4,0-2.4,2.4
		c0,1.6-0.4,2.2-2.3,2.3c-0.9,0-1.6-0.1-2.5-0.2c-0.2,0-0.3-0.1-0.5-0.1c-3.4,0.9-6.9,0.2-10.4,0.3c-0.4,0-0.8-0.1-1.2,0
		c-0.8,0.2-1.3,0.3-1.3,1.5c0,4.1-0.3,8.1-0.4,12.1c0,0.4,0,0.8,0,1.2c0,6.8,0,13.5,0,20.3c0,9-0.1,17.9-0.3,26.9
		c-0.1,5.9-0.4,12-0.7,17.9c-0.2,5.9-0.4,12-0.7,17.9c-0.2,5.5-0.3,11-0.5,16.5c-0.3,6.7-0.7,13.4-1.1,20c-0.1,1.2-0.4,1.5-1.8,1.5
		c-2.4,0.1-4.8,0.1-7.2,0.1c-3.6,0-7.2,0-11,0c-0.9,0-1.8,0.1-2.6,0.1c-1,0-1.4-0.5-1.4-1.4c-0.2-3.6-0.4-7.2-0.5-10.8
		c-0.2-5.8-0.3-11.6-0.5-17.3c-0.1-2.5-0.2-5-0.2-7.7c-0.1-6.6-0.2-13.1-0.2-19.6c-0.1-8.6-0.2-17.1-0.2-25.7
		c0-5.8,0.1-11.6,0.2-17.3c0.1-3.4,0.1-6.8,0.2-10.3c0.1-5.2,0.3-10.3,0.5-15.4c0.2-5.7,0.4-11.4,0.8-17.1c0.2-3.7,0.5-7.4,0.8-11.1
		c0.1-2.3,0.2-2.7-2.5-3.1c-1.6-0.1-2-0.5-2-2.2c0-1.3,0-2.5,0-3.8c0-1.2-0.5-1.6-1.8-1.8c-2.1-0.1-2.2-0.3-2.2-2.4
		c0-3.7,0-7.4,0-11.1c0-2-0.3-2.3-2.4-2.2c-4.1,0.1-8.1,0.3-12.3,0.4c-1.6,0-2,0.3-2,2c0.1,3.7,0.2,7.6,0.2,11.3
		c0,2.1-0.2,2.2-2.2,2.2c-0.2,0-0.5,0-0.8,0c-1,0-1.5,0.4-1.4,1.5c0.1,1.6,0,3.3,0,4.8c0,1.4-0.4,1.6-1.9,1.6
		c-2.9,0-3.5-0.4-3.4,3.2c0.1,17.1,0,34.2,0,51.4c0,7-0.1,14-0.2,21.1c-0.1,5-0.2,10.1-0.2,15.1c-0.1,4.5-0.2,9-0.2,13.6
		c-0.1,4.1-0.2,8.1-0.2,12.3c-0.2,7.9-0.3,15.7-0.5,23.6c-0.1,3.2-0.1,6.4-0.3,9.7l-0.4,1.9c-4.5,0.2-9.1,0.5-13.6,0.8
		c-2,0.1-4,0.2-5.9,0.2c-2.3,0.1-4.6,0.1-7,0.2c-1.3,0.1-1.8,0.5-1.6,1.9c0,2.1,0.1,2.8,0,4.8"
        />
      </g>
    </svg>
  );
}

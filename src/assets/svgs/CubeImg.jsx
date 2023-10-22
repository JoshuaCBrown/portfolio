import "../../style/NavImgs.css";
import { motion } from "framer-motion";
export default function CubeImg() {
  return (
    <>
      {/* <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 363 347"
        enable-background="new 0 0 363 347"
        xml:space="preserve"
      >
        <ellipse fill="var(--svgBgLight)" cx="230.24" cy="208.31" rx="97.5" ry="97.25" />
        <g>
          <ellipse
            fill="var(--svgBgDark)"
            cx="158.24"
            cy="211.06"
            rx="114.5"
            ry="107.5"
          />
          <path

            fill="var(--svgBgDark)"
            d="M158.24,319.56c-63.69,0-115.5-48.67-115.5-108.5s51.81-108.5,115.5-108.5c63.69,0,115.5,48.67,115.5,108.5
		S221.92,319.56,158.24,319.56z M158.24,104.56c-62.58,0-113.5,47.78-113.5,106.5s50.92,106.5,113.5,106.5s113.5-47.78,113.5-106.5
		S220.82,104.56,158.24,104.56z"
          />
        </g>
        <path
          fill="var(--svgBgAccent)"
          d="M160.81,208.36l-23.4-6.69c-47.23-13.51-74.57-62.75-61.07-109.98l0,0c13.51-47.23,62.75-74.57,109.98-61.07
	l23.4,6.69c47.23,13.51,74.57,62.75,61.07,109.98l0,0C257.29,194.53,208.05,221.87,160.81,208.36z"
        />
        <g>
          <motion.path
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            // fill="red"
            d="M221.5,95.75l-86.9,25.65c-1.79-0.95-7.8-4.15-14.85-8L90.21,95.75H221.5z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }} 
            fill="var(--cubeColor)"
            d="M130.97,127.51v61.94l-15.17,15.17L87.56,103.69v-2.12c0,1.29,16.53,10.56,29.54,17.65L130.97,127.51z"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
         
            points="111.57,207.8 83.33,236.04 83.33,106.87 	"
          />
          <motion.polygon
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            fill="var(--cubeColor)"
            points="286.62,131.22 286.62,262.51 280.42,258.81 280.08,258.6 280.28,258.81 280.07,258.81 
		247.74,225.58 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="260.83,253.51 260.69,253.51 260.49,253.31 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="267.03,257.22 264.46,257.22 260.83,253.51 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="285.56,124.34 225.21,124.34 240.32,98.4 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="267.03,257.22 264.32,257.22 260.69,253.51 260.49,253.31 260.83,253.51 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="283.45,129.1 244.56,223.46 240.03,218.84 198.87,176.81 225.53,129.1 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="115.81,209.92 130.97,194.75 130.97,264.1 87.56,238.16 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="234.21,98.4 219.71,124.34 208.32,124.29 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="229.45,98.44 203.55,124.34 142.54,124.09 	"
          />
          <motion.path
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            d="M198.79,129.58l-61.99,61.99v-61.94h1.52c0,0-0.01-0.01-0.02-0.01l-0.05-0.03
		c-0.01-0.01-0.03-0.01-0.04-0.02l-0.03-0.02c-0.02-0.01-0.03-0.02-0.05-0.03l-0.03-0.02c-0.01,0-0.01-0.01-0.02-0.01l-0.31-0.17
		L198.79,129.58z"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="276.49,266.75 147.92,266.75 162.42,240.81 194.61,183.21 194.64,183.16 235.8,225.2 
		240.32,229.82 272.66,263.04 272.67,263.04 	"
          />
          <motion.polygon
            fill="var(--cubeColor)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            
            points="212.3,133.91 185.64,181.62 185.61,181.67 153.42,239.27 138.92,265.21 138.92,195.86 
		200.9,133.87 	"
          />
        </g>
      </svg> */}
    </>
  );
}

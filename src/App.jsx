import { useState } from "react";
import "./style/App.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import NavCircle from "./NavCircle";

function App() {
  return (
    <>
      <div className="page-container">
        <motion.div
          className="sky"
          initial={{
            background:
              "linear-gradient(rgb(255, 255, 255) -300%, rgb(236, 236, 236) 0%, gray 100%)",
          }}
          animate={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(236, 236, 236) 100%, gray 300%)",
          }}
          transition={{ duration: 2, ease: "circOut" }}
        >
          <motion.div
            className="sky-color"
            initial={{ y: -500 }}
            animate={{ y: 25 }}
            transition={{ ease: "circOut", duration: 2 }}
          >
            <NavCircle circleId="circleone" circleTitle="About" />
            <div className="blue"></div>
            <div className="orange"></div>
          </motion.div>
        </motion.div>

        <div className="ground">
          <TitleReflector category="DESIGN"/>
        </div>
      </div>
    </>
  );
}

export default App;

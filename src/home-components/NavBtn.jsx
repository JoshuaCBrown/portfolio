import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/NavBtn.css";

function NavBtn({ btnClass, btnId, btnName, btnLink }) {




  return (
    <>
      <nav id={`${btnId}-div`} className="nav-btn-wrapper">
        <Link to={btnLink}>
          <motion.button
            className={btnClass}
            id={btnId}
            key={btnId}
          >
            {btnName}
          </motion.button>
        </Link>
        
      </nav>
    </>
  );
}

export default NavBtn;

import NavHeader from "../NavHeader";

import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
  
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="sync">
        {console.log(location)}
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={<NavHeader />} /> */}
          <Route path="about" element={<NavHeader />} />
          <Route
            path="portfolio"
            element={<NavHeader />}
          />
          <Route path="connect" element={<NavHeader />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import AltHome from "../home-components/AltHome";
import Connect from "../sections/Connect";
import About from "../sections/about/About";
import Portfolio from "../sections/portfolio/Portfolio";

function AnimatedRoutes({ themeStyle, loadedStatus }) {
  const skyInitAnim = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1, x: "-100vw", transition: { duration: 0.25 } },
    transition: { duration: 1 },
  };
  const skyLoadedAnim = {
    initial: { opacity: 1, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    exit: { opacity: 1, x: "-100vw", transition: { duration: 0.25 } },
    transition: { duration: 4 },
  };

  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AltHome
                themeStyle={themeStyle}
                animVariant={loadedStatus ? skyLoadedAnim : skyInitAnim}
                loadedStatus={loadedStatus}
              />
            }
          />
          <Route path="about/*" element={<About themeStyle={themeStyle} />} />
          <Route
            path="portfolio"
            element={<Portfolio themeStyle={themeStyle} />}
          />
          <Route path="connect" element={<Connect themeStyle={themeStyle} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;

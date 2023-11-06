import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavHeader() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname !== "/" ? (
        <motion.nav
          className="nav-header"
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 0.25 } }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <h3 className="nav-header-link">Home</h3>
          </Link>
          <Link style={{ textDecoration: "none" }} to="about">
            <h3 className="nav-header-link">About</h3>
          </Link>
          <Link style={{ textDecoration: "none" }} to="portfolio">
            <h3 className="nav-header-link">Portfolio</h3>
          </Link>
          <Link style={{ textDecoration: "none" }} to="connect">
            <h3 className="nav-header-link">Connect</h3>
          </Link>
        </motion.nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavHeader;

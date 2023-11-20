import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavHeader() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname !== "/" ? (
        <motion.div
          className="nav-sidebar-container"
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 0.25 } }}
        >
          <nav className="nav-container">
            <h3 className="nav-sidebar-link">
              <Link style={{ textDecoration: "none" }} to="/">
              <span className="link-text">Home</span>
              </Link>
            </h3>
            <h3 className="nav-sidebar-link">
              <Link style={{ textDecoration: "none" }} to="about">
              <span className="link-text">About</span>
              </Link>
            </h3>
            <h3 className="nav-sidebar-link">
              <Link style={{ textDecoration: "none" }} to="portfolio">
              <span className="link-text">Portfolio</span>
              </Link>
            </h3>
            <h3 className="nav-sidebar-link">
              <Link style={{ textDecoration: "none" }} to="connect">
                <span className="link-text">Connect</span>
              </Link>
            </h3>
          </nav>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavHeader;

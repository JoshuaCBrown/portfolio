import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/NavFooter.css";

function NavFooter() {
  const location = useLocation();
  const { pathname } = location;

  const navLinks = [
    {
      link: "/",
      title: 'Home',
      key: 'nav-footer-home',
    },
    {
      link: "about",
      title: 'About',
      key: 'nav-footer-about',
    },
    {
      link: "portfolio",
      title: 'Projects',
      key: 'nav-footer-projects',
    },
    {
      link: "connect",
      title: 'Connect',
      key: 'nav-footer-connect',
    }
  ]
  return (
    <>
      {pathname !== "/" ? (
        <motion.div
          className="main-nav-container"
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 0.25 } }}
        >
          <nav className="nav-wrapper">
            <ul className="nav-list">
              {navLinks.map((item) => (
                <li className="nav-link" key={item.key}>
                <Link style={{ textDecoration: "none" }} to={item.link}>
                <span className="link-text">{item.title}</span>
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavFooter;

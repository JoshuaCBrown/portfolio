import { Link, useLocation } from "react-router-dom";



function NavHeader() {

  const location = useLocation();
const { pathname } = location;
  return (
    <>
    {pathname !== '/' ? (<nav className="nav-header">
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
        </nav>) : (
          <></>
        )}
        
 
    </>
  );
}

export default NavHeader;

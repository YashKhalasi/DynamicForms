/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export const NavBar = () => {
  // const name = "ayshg"
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Forms
        </a>

        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link to="/login" className="m-3">
              <b className="text-white">Login Form</b>
            </Link>
            <Link to="/signIn" className="m-3">
              <b className="text-white">Sign In Form</b>
            </Link>
            <Link to="/registration" className="m-3">
              <b className="text-white">Registration Form</b>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

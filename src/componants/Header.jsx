import Link from "next/link";
import React from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    fetch("http://localhost:3000/api/logout?id=" +  process.env.NEXT_PUBLIC_KEY).then((res) => {
      if (res.ok) {
        setUser(null);
        window.location.href = "/";
      }
    });
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              NextBlog
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              {user.name ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="nav-link"
                      onClick={handleLogout}
                      href="login"
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="register">
                      Register
                    </Link>
                  </li>
                </ul>
              )}

              <span className="navbar-text">
                <i className=" icon bi bi-facebook"></i> facebook
              </span>
              <span className="navbar-text mx-2">
                <i className=" icon bi bi-github"></i> github
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

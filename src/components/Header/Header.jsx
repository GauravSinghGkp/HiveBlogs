import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(window.innerWidth > 768);
  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="header">
      <Container>
        <nav className="navbar">
          <div className="">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <img
            src="dropdown-toggle.png"
            alt="dropdown-toggle"
            onClick={toggleButtons}
            className="toggle-button"
          />
          <div
            className={showButtons ? "btn-container-sm" : "btn-container-lg"}>
            <ul className="btns">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)} className="btn">
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

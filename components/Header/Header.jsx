import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
// import classes2 from "../../styles/contact.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "",
  },
  {
    path: "#work",
    display: "Work",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#tools",
    display: "Tools",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <Link href={"/"}>
              <h1>
                <span>SHAKIL AHMED</span>
              </h1>
            </Link>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index} scroll={false}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                {/* <div className={`${classes.social__links}`}> */}
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <Link
                    href="https://www.linkedin.com/in/shakilahmed29/"
                    target="_blank"
                  >
                    <i className="ri-linkedin-line"></i>
                  </Link>
                  <Link href="https://github.com/ahmedshakil29" target="_blank">
                    <i className="ri-github-line"></i>
                  </Link>
                  <br></br>
                  <i className="ri-phone-line"></i>
                  {"+8801784285243"}
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;

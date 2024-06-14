import React, { useContext } from "react";
import "./Navbar.css";
import { CloseSVG, MenuSVG } from "../SVG";
import { NavLink } from "react-router-dom";
import Context from "../Context";

const Navbar = () => {
  const { isSidebar, setIsSidebar } = useContext(Context);

  const menuLinks = [
    { name: "Home", route: "/" },
    {
      name: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      route: "/terms-and-conditions",
    },
    {
      name: "Blog",
      route: "blog",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <MenuSVG className="menuIco" onClick={() => setIsSidebar(!isSidebar)} />
        <NavLink to={"/"}>
          <span>InstaPix</span>
        </NavLink>
      </nav>
      {isSidebar && (
        <section className="sidebar-main" onClick={() => setIsSidebar(false)}>
          <div className="sideBar">
            <div className="CloseBtn" onClick={() => setIsSidebar(!isSidebar)}>
              <CloseSVG />
            </div>
            <div className="sideBarInner">
              {menuLinks.map((item, key) => {
                return (
                  <NavLink to={item.route} key={key}>
                    {item.name}
                  </NavLink>
                );
              })}
              {/* <div className="loginBtn">Login/SignUp</div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;

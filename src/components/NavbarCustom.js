import React from "react";
import logo from "../img/Logo.svg";

export default function NavbarCustom() {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" />

        <ul className="menu menu-vertical lg:menu-horizontal bg-primary rounded-box">
          <li>
            <a className="text-base" href="/">Experience</a>
          </li>
          <li>
            <a className="text-base" href="/">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

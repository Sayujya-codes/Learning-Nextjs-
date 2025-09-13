import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuFile = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuFile;

import React from "react";
import { Container } from "../Container";
import { Link } from "react-router";
import logo from "../../assets/abazar-1.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"helpSupport"}>Help & Support</Link>
      </li>
      <li>
        <Link to={"allProduct"}>All Product</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#1ab4ac] text-white font-semibold shadow-sm w-full">
      <Container>
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="navbar">
          <Link to={"/"} className="navbar-start">
            <img src={logo} alt="" className="w-10 brightness-0 invert" />
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end"></div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to={"/wishlist"}>My Wishlist & Followed Stores</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link to={"/login"}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="peer-checked:block hidden lg:hidden pb-4">
          <ul className="menu bg-base-100 rounded-box">{links}</ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

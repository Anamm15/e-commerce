import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo.jpg"
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import storeIcon from "../assets/icons/store-icon.svg";

const Navbar: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef: React.MutableRefObject<NodeListOf<HTMLAnchorElement> | null> = 
    React.useRef(document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>);


  useEffect(() => {
    const hamburgerMenu = hamburgerMenuRef.current;
    const mobileMenu = mobileMenuRef.current;

    if (hamburgerMenu && mobileMenu) {
      const handleClick = () => {
        if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden");
          setTimeout(() => {
            mobileMenu.classList.remove("-translate-y-full", "opacity-0");
            mobileMenu.classList.add("translate-y-0", "opacity-100");
          }, 10);
        } else {
          mobileMenu.classList.remove("translate-y-0", "opacity-100");
          mobileMenu.classList.add("-translate-y-full", "opacity-0");
          setTimeout(() => {
            mobileMenu.classList.add("hidden");
          }, 300);
        }
      };

      hamburgerMenu.addEventListener("click", handleClick);
      return () => {
        hamburgerMenu.removeEventListener("click", handleClick);
      };
    }
  }, []);

  useEffect(() => {
      const session = Cookies.get('session');
      if (session) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const menuLinks = document.querySelectorAll("ul li a") as NodeListOf<HTMLAnchorElement>;
    const currentUrl = window.location.pathname;

    menuLinksRef.current = menuLinks;

    menuLinks.forEach((link) => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("text-blue-800", "active");
      }
    });
  }, []);

  return (
    <nav className="fixed z-50 w-screen top-0 bg-gradient-to-r from-primary-1 to-primary-2 left-1/2 -translate-x-1/2 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 lg:h-24 px-4">
        <div>
            <a href="/" className="font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <img src={logo} alt="" className="w-20 h-20" />
            </a>
        </div>
        <div className="w-3/5 text-gray-500">
            <input type="text" placeholder="Cari produk" className="w-full py-2 text-lg rounded-sm px-4 focus:outline-none border border-gray-300 " />
        </div>
        <div className="flex gap-8 text-xl items-center">
            {
                isLoggedIn ? (
                    <>
                        <NavLink to="/dashboard" className="hover:text-blue-800">
                            <img src={storeIcon} alt="" />
                        </NavLink>
                        <NavLink to="/profile" className="hover:text-blue-800">Profile</NavLink>
                        <NavLink to="/logout" className="hover:text-blue-800">Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="hover:text-blue-800">Login</NavLink>
                        <NavLink to="/register" className="hover:text-blue-800">Register</NavLink>
                    </>
                )
            }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
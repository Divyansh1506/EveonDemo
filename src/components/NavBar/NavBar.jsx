'use client'
import React, { useEffect, useRef, useState } from "react";
import Styles from "./style.module.css";
import svg from "../../../public/Icons/svg";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "..";
import { usePathname } from "next/navigation";
import images from "../../../public/Images/image";
import global from '../../utils/commonStyles.module.css'

const NavBar = () => {
  const currentRoute = usePathname();

  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenu] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      // if (window.innerWidth > 900) {
      setMenu(false);
      // }
    };

    handleResize();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav
      className={`${Styles.nav_cont}`}
      ref={dropdownRef}
    >
      <div className={Styles.wraper}>
        <Link href={"/"} className={Styles.lft}>
          <Image
            alt="Brand Logo"
            src={images.SmLogo}
            width={164.545}
            height={25}
          />
        </Link>
        <div
          className={`${Styles.rgt} ${Styles.responsive_menu}`}
          style={{
            right: menuOpen ? "0" : "-100%",
            transition: "all .3s",
          }}
        >
          <ul className={Styles.links_cont}>
            <li>
              <Link
                onClick={() => setMenu(!menuOpen)}
                href={"/aboutus"}
                className={
                  currentRoute == "/aboutus" ? Styles.linkActive : ""
                }
              >
                About us
              </Link>
            </li>
            <li
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div
                className={Styles.service_drop_cont}
              >
                <Link
                  onClick={() => {
                    setMenu(!menuOpen)
                    setDropdown(false);
                  }}
                  href={"/tools"}
                  className={
                    currentRoute.includes("/tools")
                      ? Styles.linkActive
                      : ""
                  }
                >
                  Tools
                </Link>
                <svg
                  className={Styles.drop_icon}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"

                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="18" height="18" fill="#FFFFFF" />
                  <g id="Arrow">
                    <path
                      id="Vector 2"
                      d="M1.49976 5.24902L8.99976 12.749L16.4998 5.24902"
                      stroke={currentRoute.includes("/services/") ? "#EF74CA" : "black"}
                      stroke-width="2.57143"
                    />
                  </g>
                </svg>
              </div>

              {dropdown && (
                <ul className={Styles.servicelist_cont}>
                  <li className={Styles.servicelist_item}>
                    <Link
                      onClick={() => setDropdown(false)}
                      href={""}
                      style={{
                        color: "#000",
                        fontSize: "0.775rem",
                        fontWeight: "600",
                        lineHeight: "1rem",
                      }}
                    >
                      Emi Calculator
                    </Link>
                  </li>
                  <li className={Styles.servicelist_item}>
                    <Link
                      onClick={() => setDropdown(false)}
                      href={""}
                      style={{
                        color: "#000",
                        fontSize: "0.775rem",
                        fontWeight: "600",
                        lineHeight: "1rem",
                      }}
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                onClick={() => setMenu(!menuOpen)}
                href={"/services"}
                className={
                  currentRoute.includes("/services")
                    ? Styles.linkActive
                    : ""
                }
              >
                Services
              </Link>
            </li>
            <li className={global.btn}>
              <Link
                onClick={() => setMenu(!menuOpen)}
                href={"/partners"}
                className={currentRoute == "/partners" ? Styles.linkActiveWhite : ""}
              >
               Become OUR Partner
              </Link>
            </li>
          </ul>


          <div onClick={() => setMenu(!menuOpen)} className={Styles.close_icon}>
            <Image alt="Close" src={svg.CloseIcon} />
          </div>
        </div>
        <div onClick={() => setMenu(!menuOpen)} className={Styles.menu_cont}>
          <Image alt="Menu" src={svg.MenuIcon} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

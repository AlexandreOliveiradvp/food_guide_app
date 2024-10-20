"use client";
import "./header.scss";
import Image from "next/image";
import Logo from "../../public/assets/logoHeader.png";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const HeaderDefault = () => {
  const [stateDropdown, setValue] = useState(false);
  const dropdownAction = () => {
    setValue(!stateDropdown);
  };
  const closeDropown = () => {
    setValue(false)
  }

  return (
    <header className="header-default">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="py-5">
            <Image
              src={Logo}
              alt="Picture of the author"
              className="logo-header"
            />
          </div>
          <div className="flex justify-end py-5">
            <div className="block">
              <div className="btn-pages" onClick={dropdownAction}>
                <span>Pages</span> <FaAngleDown />
              </div>
              <div
                className={
                  stateDropdown
                    ? "list-dropdown shadow-lg ease-in duration-150"
                    : "invisible"
                }
              >
                <ul onClick={closeDropown}>
                  <li>
                    <Link href="/dashboard">Search Recipes</Link>
                  </li>
                  <li>
                    <Link href="/recipes">My Recipes</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDefault;

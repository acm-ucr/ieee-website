import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuItem from "./MenuItems";
import { useState } from "react";

const items = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Events",
    link: "events",
  },
  {
    name: "Board",
    link: "board",
  },
];

const Navigation = () => {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  return (
    <>
      <Navbar
        className="flex justify-between backdrop-blur-md pb-1 m-0 p-0"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Brand>
          <Link
            href="/"
            className="no-underline m-0"
            onClick={() => setSelected("Logo")}
          >
            <div className="mt-1 mb-2 ml-2 flex justify-center items-center font-teko text-white text-5xl">
              <>
                <img
                  src="assets/ieee-only-logo-blue.svg"
                  className="w-10 mr-2"
                />
                <p className="text-white mb-0">IEEE</p>
              </>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="list-unstyled !text-transparent"
          aria-controls="basic-navbar-nav"
        >
          <FaBars className="text-white text-xl" />
        </Navbar.Toggle>
        <Navbar.Collapse className="w-full h-full items-center md:justify-end justify-center">
          <Nav className="text-2xl font-teko flex justify-evenly items-center">
            {items.map((item, index) => (
              <MenuItem
                text={item.name}
                link={`/${item.link}`}
                name={item.name}
                key={index}
                index={index}
                onMouseOver={() => setIsHovered(item.name)}
                onMouseOut={() => setIsHovered(0)}
                selected={selected == item.name}
                onClick={() => setSelected(item.name)}
                Hovered={isHovered === item.name}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

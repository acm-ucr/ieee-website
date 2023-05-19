import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuItem from "./MenuItems";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <>
      <Navbar
        className="flex justify-between bg-[url('/assets/circuit-board.svg')] bg-ieee-black m-0 p-0 border-b-4 border-ieee-lightblue"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Brand>
          <Link href="/" className="no-underline">
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
        <Navbar.Collapse
          id="navbar-nav"
          className="m-0 flex justify-center md:justify-end items-center"
        >
          <Nav className="text-2xl font-teko flex justify-evenly items-center pb-2">
            {items.map((item, index) => (
              <MenuItem
                path={router.asPath}
                text={item.name}
                link={`/${item.link}`}
                name={item.name}
                key={index}
                index={index}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

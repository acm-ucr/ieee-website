import React, { useState } from "react";
import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const MenuItem = ({ text, selected, onClick, link }) => (
  <motion.div href={link} className="relative" onClick={onClick}>
    <Link className=" no-underline text-white" href={link}>
      {text}
    </Link>
    {selected && (
      <motion.div
        className="absolute bg-gradient-to-r from-ieee-purple to-ieee-blue h-[2.5px] w-full"
        layoutId="underline"
      />
    )}
  </motion.div>
);

const Navigation = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Navbar
      className=" flex flex-col bg-[url('/assets/circuit-board.svg')] bg-ieee-black m-0 pt-0 pb-0"
      collapseOnSelect
      expand="md"
      fixed="top"
    >
      <div className=" w-full flex flex-between items-center p-0">
        <motion.a
          className="mt-1 mb-2 w-32 h-9 ml-2 no-underline flex flex-row justify-evenly font-teko text-white text-5xl"
          href="/"
        >
          <img src="assets/ieee-only-logo-blue.svg" />
          <p>IEEE</p>
        </motion.a>
        <Navbar.Toggle className="!text-sm" aria-controls="navbar-nav" />
        <Navbar.Collapse
          id="navbar-nav"
          className="m-0 flex justify-center md:justify-end items-center"
        >
          <Nav className=" w-1/3 text-2xl font-teko flex justify-evenly items-center">
            <MenuItem
              text="About"
              key="about"
              link="/about"
              selected={selected === "about"}
              onClick={() => setSelected("about")}
            />
            <MenuItem
              text="Projects"
              key="projects"
              link="/projects"
              selected={selected === "projects"}
              onClick={() => setSelected("projects")}
            />
            <MenuItem
              text="Events"
              key="events"
              link="/events"
              selected={selected === "events"}
              onClick={() => setSelected("events")}
            />
            <MenuItem
              text="Board"
              key="board"
              link="/board"
              selected={selected === "board"}
              onClick={() => setSelected("board")}
            />
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="mt-0 w-full h-1 bg-gradient-to-r from-ieee-purple via-ieee-pink to-ieee-blue" />
    </Navbar>
  );
};

export default Navigation;

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuItem from "./events/MenuItems";
import logo from "../public/assets/ieee-only-logo-blue.svg";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Board",
    link: "/board",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <Navbar
        className="flex justify-between backdrop-blur-md pb-1 m-0 p-0"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Brand>
          <Link href="/" className="no-underline m-0">
            <div className="mt-1 mb-2 ml-2 flex justify-center items-center font-teko text-white text-5xl">
              <>
                <img src={logo.src} className="w-10 mr-2" />
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
            {items.map(({ name, link }, index) => (
              <MenuItem
                text={name}
                link={link}
                name={name}
                key={index}
                index={index}
                onMouseOver={() => setIsHovered(item.name)}
                onMouseOut={() => setIsHovered(0)}
                selected={pathname === link}
                Hovered={pathname === link}
              />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

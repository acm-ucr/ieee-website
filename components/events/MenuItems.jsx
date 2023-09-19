import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const MenuItem = ({
  index,
  text,
  selected,
  onClick,
  link,
  onMouseOver,
  onMouseOut,
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <Nav.Link as={Link} href={link} eventKey={index} className="">
      <div
        className="w-fit relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
      >
        <p
          className={`${
            hover || router.asPath === link ? "opacity-100" : "opacity-70"
          }   mb-0 text-white p-0`}
        >
          {text}
        </p>
        <div
          className={`${
            selected ? "opacity-100" : "opacity-0"
          } duration-300 bg-gradient-to-r from-ieee-purple to-ieee-blue h-[2.5px] w-full`}
        />
      </div>
    </Nav.Link>
  );
};

export default MenuItem;

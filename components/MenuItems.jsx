import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useState } from "react";

const MenuItem = ({ index, text, link, path }) => {
  const [hover, setHover] = useState(false);

  return (
    <Nav.Link as={Link} href={link} eventKey={index}>
      <div
        className="w-fit"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p
          className={`${
            path == link ? "opacity-100" : "opacity-70"
          } hover:opacity-100 mb-0 text-white`}
        >
          {text}
        </p>
        {hover ||
          (path == link && (
            <div className="bg-gradient-to-r from-ieee-purple to-ieee-blue h-[2.5px] w-full" />
          ))}
        {!hover && <div className="h-[2.5px] w-full" />}
      </div>
    </Nav.Link>
  );
};

export default MenuItem;

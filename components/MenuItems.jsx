import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MenuItem = ({
  index,
  text,
  selected,
  Hovered,
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
        {selected && (
          <motion.div
            className="absolute bg-gradient-to-r from-ieee-purple to-ieee-blue h-[2.5px] w-full"
            layoutId="underline"
          />
        )}
      </div>
    </Nav.Link>
  );
};

export default MenuItem;

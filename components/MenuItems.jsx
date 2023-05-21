import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const MenuItem = ({ index, text, link }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <Nav.Link as={Link} href={link} eventKey={index}>
      <div
        className="w-fit"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p
          className={`${
            hover || router.asPath === link ? "opacity-100" : "opacity-70"
          }   mb-0 text-white`}
        >
          {text}
        </p>
        <div
          className={`bg-gradient-to-r ${
            hover || router.asPath === link
              ? "from-ieee-purple to-ieee-blue"
              : ""
          }  h-[2.5px] w-full`}
        />
        {!hover && <div className="h-[2.5px] w-full" />}
      </div>
    </Nav.Link>
  );
};

export default MenuItem;

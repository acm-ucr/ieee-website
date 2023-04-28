import { useRef , useState, useEffect} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function Gear({ src, isClockwise, speed }) {
  const rotationDirection = isClockwise ? { rotate: 360 } : { rotate: -360 };
  
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [direction, setDirection] = useState(rotationDirection);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
        setDirection(rotationDirection);
      } else if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
        setDirection(isClockwise ? { rotate: -360 } : { rotate: 360 });
      }

      prevScrollY.current = currentScrollY;
      //console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <motion.div
      style={{ display: "inline-block" }}
      animate={direction}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <img src={src} alt="gear" />
    </motion.div>
  );
}

export default Gear;


import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  useScroll,
  useVelocity,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
function Gear({ src, isClockwise, speed }) {
  const [direction, setDirection] = useState(1);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const base = useMotionValue(5);
  const rotate = useTransform(base, (base) => {
    return base;
  });
  useAnimationFrame((t, delta) => {
    let moveBy = ((direction * speed) / 5) * (delta / 16);
    if (scrollVelocity.get() < 0) {
      setDirection(-1);
    } else if (scrollVelocity.get() > 0) {
      setDirection(1);
    }
    moveBy += (scrollVelocity.get() * (delta / 1000) * speed) / 10;
    base.set(base.get() + moveBy);
  });
  return (
    <motion.div
      style={{ rotate }}
      transition={{
        ease: "linear",
      }}
    >
      <img src={src} alt="gear" className="w-full" />
    </motion.div>
  );
}

export default Gear;

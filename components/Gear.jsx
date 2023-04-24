import React from "react";
import { motion } from "framer-motion";

function Gear({ src, isClockwise, speed }) {
  const rotationDirection = isClockwise ? { rotate: 360 } : { rotate: -360 };

  return (
    <motion.div
      style={{ display: "inline-block" }}
      animate={rotationDirection}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <img src={src} alt="gear" />
    </motion.div>
  );
}

export default Gear;

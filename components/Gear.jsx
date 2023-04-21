import React from "react";
import { motion } from "framer-motion";

function Gear({ src }) {
  return (
    
      <motion.div        
        style={{ display: "inline-block" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <img src={src} alt="gear"/>
      </motion.div>
    
  );
}

export default Gear;

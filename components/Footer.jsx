import React from "react";
import ieeelogo from "../public/assets/ieee-logo.svg";
import wave from "../public/assets/wave.svg";
import vector1 from "../public/assets/footer-vector-1.svg";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer class="relative bg-black z-0 ">

     
        <image src={vector1.src} class=" ablosute bottom-0 w-full h-full z-10"/>

     
      <div class="flex p-8 space-x-4">
        <div className="relative flex-grow">
          <img
            src={ieeelogo.src}
            class="absolute h-12 inset-x-0 bottom-0"
            alt="IEEE Logo"
          />
        </div>
        <div className="border-r-4 m-auto pr-6  font-teko text-lg ">
          <div class="mb-2">Contact us</div>
          <div class="mb-2">900 University Ave,</div>
          <div>Riverside, CA 92501</div>
        </div>

        <div class="m-auto pl-5 space-y-5">
          <BsDiscord size={40} />
          <GrMail size={40} />
        </div>
      </div>
      
     
    </footer>
  );
};

export default Footer;
{
  /* <div className ="bg-[url('../public/assets/wave.svg')]">hi</div>

<img className = " w-full cover-bottom bottom-0" src={wave.src} alt="backgroundwave"/> */
}

// <footer>
//     <div class="w-full max-w-screen-xl mx-auto ">
//     <div className="relative  boarder overflow-hidden h-96 bg-black  text-white font-teko">

//     <div className ="absolute bg-[url('../public/assets/wave.svg')] h-8 mr-3 bg-no-repeat -bottom-5">hi</div>
//       <img className="absolute bottom-12 left-14 w-1/5  "  src={ieeelogo.src} alt="ieeelogo"/>
// </div>
// </div>

//     </footer>
{
  /* <div style={verticalLineStyle}></div> */
}

{
  /* <footer class="bg-black font-teko text-white">

<div class="w-full max-w-screen-xl mx-auto md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between bg-black">
    
        <a href="https://IEEE.ucr.edu/" class="flex items-center mb-4 py-7 sm:mb-0">
            <img src={ieeelogo.src} class="h-12" alt="IEEE Logo" />
        </a>
        
        <div className ="border-r-4 pr-4">
          <h5>

            <div calssName="pb-4">Contact us</div>
           <div calssName="pb-4">900 University Ave,</div>
           <div calssName="pb-4">Riverside, CA 92501</div>
           </h5>
        </div>
        <div>ss</div>
          
        
    </div>
</div>
</footer> */
}

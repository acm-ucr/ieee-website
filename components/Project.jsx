import React from "react";

const Project = () => {
  return (
    <div>
      <h2 className="m-10 font-teko">Solar Car</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-row space-x-4">
          <img src="public/pictures/solarcar2.png"></img>
          <img src="public/pictures/solarcar1.png"></img>
        </div>
        <p className="text-center text-xl w-2/5 m-10 font-giden">
          The University of California Riverside Solar Car team consists of many
          talented, undergraduate students who aim to construct a full-scaled
          solar car to compete in the Formula Sun Grand Prix, and the American
          Solar Challenge: a national collegiate competition which requires
          teams and their solar-powered vehicles to finish a 2,000 mile
          cross-country journey.
        </p>
      </div>
      <div>
        <h2 className="m-10 font-teko">Unmanned Aerial Systems</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <img src="public/pictures/UAS1.png"></img>
            <img src="public/pictures/UAS2.png"></img>
          </div>
          <p className="text-center text-xl w-2/5 m-10 font-giden">
            UCR Unmanned Aerial Systems is a highly-motivated and
            interdisciplinary group of students designing, constructing and
            programming an autonomous aerial vehicle to compete in the annual
            Association for Unmanned Vehicle Systems International Student
            Unmanned Aerial Systems Competition (AUVSI-SUAS) hosted in Maryland.
          </p>
        </div>
      </div>
      <div>
        <h2 className="m-10 font-teko">RoboSub</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <img src="public/pictures/RoboSub1.png"></img>
            <img src="public/pictures/RoboSub2.png"></img>
          </div>
          <p className="text-center text-xl w-2/5 m-10 font-giden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamaco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div>
        <h2 className="m-10 font-teko">Micromouse</h2>
        <div className="flex flex-col items-center">
          {/* need micromouse pics, then update image div */}
          <div>
            <img src="public/pictures/index4.png"></img>
          </div>
          <p className="text-center text-xl w-2/5 m-10 font-giden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamaco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;

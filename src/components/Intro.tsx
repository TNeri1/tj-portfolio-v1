import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img
            src="./assets/me-470x470.png"
            alt="..."
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Trevor James Neri
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Friendly Neighborhood Hacker | Data Scientist | Software Engineer
      </p>
      <p className="text-md max-w-xl mb-6 font-bold">
        I break things, I analyze things, I build things.
      </p>
    </div>
  );
}

export default Intro;

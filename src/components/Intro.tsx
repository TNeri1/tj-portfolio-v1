import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Trevor J.</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Friendly Neighborhood Hacker & Data Scientist & Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is my bio. I am a hacker, data scientist, and software engineer. 
        I am a student at the Massachusett's Institute of Technology. 
        I am passionate about data science, machine learning, and 
        software engineering. I currently work with Spiderman to fight crime
        and save the world.
      </p>
    </div>
  );
};

export default Intro;
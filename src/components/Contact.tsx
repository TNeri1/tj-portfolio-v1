import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/00417844-16c1-48fe-aacb-4c589cd571b7"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
          >
          <Title>Contact Me</Title>
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 dark:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
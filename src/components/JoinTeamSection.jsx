import React from 'react';

const JoinTeamSection = () => {
  return (
    <section
      className="min-h-[200vh] px-10 py-20 flex items-center"
      style={{
        backgroundImage: `url('/bgimg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height:300,

      }}
    >
     <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between px-6 lg:px-10">
  {/* Left Side - Content */}
  <div className="max-w-3xl mt-10 space-y-6 px-5 py-5">
    <p className="text-lg uppercase tracking-wider text-gray-200 py-2 px-2">
      Work With Us
    </p>

    <h1 className="text-4xl md:text-5xl font-bold">
      Join Our Diverse Team
    </h1>

    <p className="text-lg text-gray-100 leading-relaxed">
      Join our team of seasoned IT professionals and acquire curated digital expertise.
    </p>
  </div>

  {/* Right Side - Button */}
  <div className="ml-10 mt-10 px-5 mb-2">
    <a
      href="#"
      className=" text-white-800 font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      View Openings →
    </a>
  </div>


      </div>
    </section>
  );
};

export default JoinTeamSection;

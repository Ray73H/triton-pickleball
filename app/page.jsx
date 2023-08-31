import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url('/assets/images/background.webp')` }}
      >
        <div className="flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-8xl font-bold mb-4 text-shadow">
            Triton Pickleball
          </h1>
          <h2 className="text-3xl mb-8 text-shadow">
            Social and Competitive Club at UC San Diego
          </h2>
          <div className="flex space-x-4">
            <a
              href="/join"
              className="hover:bg-gray-500 bg-white text-black font-semibold rounded-full py-2 px-6 transition duration-300"
            >
              Join Us
            </a>
            <a
              href="/schedule"
              className="hover:bg-gray-500 bg-white text-black font-semibold rounded-full py-2 px-6 transition duration-300"
            >
              Schedule
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col min-h-screen justify-center items-center">
        <div className="max-w-3xl bg-gray-100 flex flex-col justify-center items-center py-16 px-8 shadow-xl rounded-xl">
          <h3 className="text-5xl font-semibold text-gray-900 mb-4">
            Join The Club
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Triton Pickleball is a club where all skill levels and sports
            backgrounds come together for fun and inclusive games.
          </p>
          <p className="text-xl text-gray-900 font-semibold mb-4">
            UCSD members: Pending for Fall Quarter
          </p>
        </div>
        <div className="max-w-3xl bg-gray-100 flex flex-col justify-center items-center py-16 px-28 mt-8 shadow-xl rounded-xl">
          <h3 className="text-5xl font-semibold text-gray-900 mb-4">
            Practice & Events
          </h3>
          <p className="text-xl text-gray-600 mb-4">
            Current Practice schedule is being decided. Check back soon!
            {/* Current Practices for Fall Quarter are Tuesdays from 7-10pm */}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Check the calendar for up-to-date information
          </p>
          <a
            href="/schedule"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full py-2 px-6 transition duration-300"
          >
            See All Practices
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

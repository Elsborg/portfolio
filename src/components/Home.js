import React from "react";
import cv from "../assets/documents/cv.pdf";
import HeroImage1 from "../assets/cvgradient.png";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Jeg hedder Martin og er 23 år gammel med base i Aarhus. Min passion er frontend udvikling og jeg brænder for at udvikle brugervenlige webaplikationer.
          </p>

          <div>
            <a
              href= {cv}
              download="cv"
              target="_blank"
              rel="noreferrer"
              className="text-white underline decoration-2 font-bold w-fit px-6 py-3 my-2 flex items-center rounded bg-gradient-to-r from-amber-500 to-yellow-700 cursor-pointer hover:scale-110 duration-300"
            >
              Download mit CV

            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage1}
            alt="Billede af Martin Elsborg"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
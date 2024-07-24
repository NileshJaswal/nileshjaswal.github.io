import React from "react";
import heroImg from "../img/heroImg.png";
import btnIcon from "../img/btnIcon.svg";

export default function Hero(props) {
  return (
    <section className="mb-20">
      <div className="container grid grid-cols-4 md:grid-cols-12 gap-24 mx-auto py-24">
        <div className="col-span-4 md:col-span-7 md:flex justify-center flex-col heroText text-white">
          <h1 className="mb-2 md:text-6xl text-4xl font-bold">
            Hello, I'm <span className="text-secondary">{props.name}</span>
          </h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold">Web & UI Designer</h2>
          <p className="mb-8 text-xl text-gray-400">
          Experienced Web and UI Designer with a strong background in front-end development, UI/UX Designing and team leadership. Proven expertise in HTML, CSS, SCSS, JavaScript, and design tools like Figma and Adobe XD.
          </p>
          <a href="mailto:arcanenilesh@gmail.com" class="flex w-fit items-center text-white btn bg-secondary">
            <img src={btnIcon} alt="btnIcon" />
            Contact Me
          </a>
        </div>
        <div className="heroImg col-span-4 md:col-span-5 flex md:justify-end">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </section>
  );
}

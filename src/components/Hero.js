import React from "react";
import heroImg from "../img/heroImg.png";
import btnIcon from "../img/btnIcon.svg";

export default function Hero(props) {
  return (
    <section className="mt-10 mb-20">
      <div className="container flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="heroText text-white">
          <span className="mb-2 text-base">Hello</span>
          <h1 className="mb-4 text-5xl font-bold">
            I'm <span className="text-secondary">{props.name}</span>
          </h1>
          <h2 className="mb-2 text-2xl font-semibold">Web & UI Designer</h2>
          <p className="mb-8 text-base">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <button class="flex items-center text-white btn bg-secondary">
            <img src={btnIcon} alt="btnIcon" />
            Contact Me
          </button>
        </div>
        <div className="heroImg">
          <img src={heroImg} alt="heroImg" />
        </div>
      </div>
    </section>
  );
}

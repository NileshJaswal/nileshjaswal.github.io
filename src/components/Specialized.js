import React from "react";
import design from "../img/design.svg";
import ux from "../img/UX.svg";
import dev from "../img/dev.svg";

export default function Specialized() {
  return (
    <section className="specialized">
      <div className="container mx-auto text-white">
        <h3 className="text-3xl mb-12">
          I’m <span className="text-secondary">Specialized</span> in
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-12">
          <div className="col-span-4 card">
            <div className="img-wrap">
              <img src={design} alt="design" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
            <p className="text-base">
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </p>
          </div>
          <div className="col-span-4 card">
            <div className="img-wrap">
              <img src={ux} alt="ux" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">UI/UX Design</h4>
            <p className="text-base">
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </p>
          </div>
          <div className="col-span-4 card">
            <div className="img-wrap">
              <img src={dev} alt="dev" />
            </div>
            <h4 className="text-2xl font-semibold mb-2">
              Front-End Development
            </h4>
            <p className="text-base">
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

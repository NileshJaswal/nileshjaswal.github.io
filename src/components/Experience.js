import React from "react";
import baseline from "../img/baseline.png";
import slinfy from "../img/slinfy.png"

export default function Experience() {
  return (
    <section className="experience bg-sectionbg pt-10 pb-20">
      <div className="container mx-auto">
        <h3 className="text-4xl mb-6 text-center">
          My <span className="text-secondary">Experience</span>
        </h3>
        <p className="text-xl	mb-12 text-center">
          Here is a quick summary of my most recent experiences
        </p>
        <div className="flex flex-col gap-12">
          <div className="grid md:grid-cols-12 exp-card mx-auto rounded-xl p-8 bg-cardbg">
            <div className="col-span-3">
              <img src={baseline} alt="baseline" />
            </div>
            <div className="col-span-6">
              <h3 className="text-secondary font-semibold text-xl">
                Web & UI Designer - TL
              </h3>
              <ul className="text-base">
                <li>
                  Promoted to Senior Web & UI Designer and Team Lead, continuing
                  work on agile project.
                </li>
                <li>
                  Led the design and development for Klevu search, PLP, order
                  details, and tracking using Storefront & GraphQL API.
                </li>
                <li>
                  Directed team efforts on other page designs, ensuring cohesive
                  and functional results.
                </li>
                <li>
                  Created design systems and components for new agile based
                  project, developing custom widgets to meet client needs.
                </li>
                <li>
                  Worked on various Figma UI/UX projects, Webflow, and other
                  front-end JavaScript projects.
                </li>
              </ul>
            </div>
            <div className="col-span-3 flex justify-end">
              <time>JUL 2022 - JUN 2024</time>
            </div>
          </div>

          <div className="grid md:grid-cols-12 exp-card mx-auto rounded-xl p-8 bg-cardbg">
            <div className="col-span-3">
              <img src={baseline} alt="baseline" />
            </div>
            <div className="col-span-6">
              <h3 className="text-secondary font-semibold text-xl">
                Web Designer
              </h3>
              <ul>
                <li>
                  Started as a web designer at Baseline IT Developments, working
                  on live projects within a month.
                </li>
                <li>
                  Developed websites using HTML, CSS, WordPress, and
                  Squarespace, including client interactions.
                </li>
                <li>
                  Enhanced skills in Git, SCSS and basic jQuery for front-end
                  tasks.
                </li>
                <li>
                  Worked on an agile BigCommerce e-commerce project, focusing on
                  product page design and functionality.
                </li>
                <li>
                  Designed product pages from scratch, improving user
                  experience.
                </li>
                <li>
                  Adapted new skills in Figma UI design and JavaScript during
                  the BigCommerce project.
                </li>
              </ul>
            </div>
            <div className="col-span-3 flex justify-end">
              <time>APR 2021 - JUL 2022</time>
            </div>
          </div>

          <div className="grid md:grid-cols-12 exp-card mx-auto rounded-xl p-8 bg-cardbg">
            <div className="col-span-3">
              <img src={slinfy} alt="slinfy" />
            </div>
            <div className="col-span-6">
              <h3 className="text-secondary font-semibold text-xl">
                Web Designer - Trainee
              </h3>
              <ul>
                <li>
                  I dedicated significant time and effort to master the
                  fundamentals of HTML and CSS.
                </li>
                <li>
                  I acquired the skill of converting complex design files (PSD &
                  FIGMA) into functional and pixel-perfect HTML/CSS templates.
                </li>
                <li>
                  To solidify my skills, I embarked on several projects to
                  create simple websites from scratch. These practical exercises
                  enabled me to refining my problem-solving abilities.
                </li>
              </ul>
            </div>
            <div className="col-span-3 flex justify-end">
              <time>FEB 2020 - AUG 2020</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Experience() {
  return (
    <section>
      <div className="container mx-auto mt-20">
        <h3 className="text-3xl mb-12 text-center">My <span className="text-secondary">Journey</span></h3>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#d74e4e"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Apr 2021 - June 2024</time>
              <div className="text-2xl font-semibold">Baseline IT Development</div>
              I started as a web designer at Baseline IT Developments, quickly working on live projects. I developed websites using HTML, CSS, WordPress, and Squarespace, enhancing my skills in Git, SCSS, and jQuery. I focused on product page design and functionality in an agile BigCommerce e-commerce project, improving user experience. Promoted to Senior Web & UI Designer and Team Lead, I led the design and development for Klevu search, PLP, order details, and tracking using Storefront & GraphQL API. I directed team efforts, created design systems, and developed custom widgets, working on various Figma UI/UX, Webflow, and JavaScript projects.
            </div>
            <hr className="bg-white" />
          </li>
          <li>
            <hr className="bg-white" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#d74e4e"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Apr 2020 - Oct 2020</time>
              <div className="text-2xl font-semibold">Solitaire Infosystems</div>
              I dedicated significant time and effort to mastering HTML and CSS, acquiring the skill to convert complex design files (PSD & Figma) into functional and pixel-perfect HTML/CSS templates. To solidify my skills, I embarked on several projects to create simple websites from scratch, refining my problem-solving abilities through these practical exercises.
            </div>
            <hr className="bg-white"/>
          </li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import pcmega from "../img/pcmega.png";
import redirect from "../img/redirect.png";
import signprice from "../img/signprice.png";
import block from "../img/block.png";
import conns from "../img/conns.png";
import sleep from "../img/sleep.png";

export default function Portfolio() {
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto">
        <h3 className="text-4xl mb-6 text-center">
          My <span className="text-secondary">Experience</span>
        </h3>
        <p className="text-xl	mb-12 text-center">
          Here is a quick summary of my most recent experiences
        </p>
        <div className="flex flex-col gap-12">
          <div className="port-card flex bg-cardbg rounded-xl overflow-hidden">
            <div className="proImg w-1/2 p-12 bg-port-gray">
              <img src={pcmega} className="rounded-xl" alt="pcmega" />
            </div>
            <div className="proDetails w-1/2 p-12">
              <h4 className="text-secondary text-2xl mb-6 font-semibold">
                PC MegaMart - Front-End & UX Improvements
              </h4>
              <p className="text-base mb-6">
                For PCmegamart.com, I crafted the front-end experience using
                JavaScript and web design techniques, ensuring a seamless and
                visually appealing interface. Additionally, I designed all UX
                components for the client, focusing on creating an intuitive and
                engaging user experience.
              </p>
              <div className="flex gap-2 mb-6">
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  JavaScript
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  HTML/CSS
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX A/B Testing
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX Research
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  Figma
                </div>
              </div>
              <a href="https://pcmegamart.com.au/">
                <img src={redirect} alt="redirect" />
              </a>
            </div>
          </div>
          <div className="port-card flex flex-row-reverse bg-cardbg rounded-xl overflow-hidden">
            <div className="proImg w-1/2 p-12 bg-port-gray">
              <img src={conns} className="rounded-xl" alt="conns" />
            </div>
            <div className="proDetails w-1/2 p-12">
              <h4 className="text-secondary text-2xl mb-6 font-semibold">
                Conn's - Front-End Development
              </h4>
              <p className="text-base mb-6">
                I had the opportunity to work on a long-term Agile and
                Scrum-based project spanning almost two years. During this time,
                I was responsible for designing the product page initially.
                Subsequently, I took on tasks related to the Product Listing
                Page (PLP) and later worked on the design and functionality of
                the order details and order tracking pages. As a member of a
                large, collaborative team, we successfully delivered the
                project, ensuring seamless and user-friendly interfaces across
                various aspects of the e-commerce platform.
              </p>
              <div className="flex gap-2 mb-6">
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  JavaScript
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  HTML/CSS
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX A/B Testing
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX Research
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  Figma
                </div>
              </div>
              <a href="https://www.conns.com/">
                <img src={redirect} alt="redirect" />
              </a>
            </div>
          </div>

          <div className="port-card flex bg-cardbg rounded-xl overflow-hidden">
            <div className="proImg w-1/2 p-12 bg-port-gray">
              <img src={block} className="rounded-xl" alt="block" />
            </div>
            <div className="proDetails w-1/2 p-12">
              <h4 className="text-secondary text-2xl mb-6 font-semibold">
                We Will BlockYou - UX Design
              </h4>
              <p className="text-base mb-6">
                For WWBU.com, I designed the UX for all eCommerce website pages
                from scratch. I researched the eCommerce references provided by
                the client and created an original design influenced by these
                references. This approach ensured a unique, intuitive, and
                user-friendly shopping experience tailored to the client's
                vision.
              </p>
              <div className="flex gap-2 mb-6">
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  JavaScript
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  HTML/CSS
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX A/B Testing
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX Research
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  Figma
                </div>
              </div>
              <a href="https://www.figma.com/design/YHBKNew97uejL15ISNnC0y/WWBU?node-id=0-363&t=8SLyTaTsLo3D4yRV-1">
                <img src={redirect} alt="redirect" />
              </a>
            </div>
          </div>
          <div className="port-card flex flex-row-reverse bg-cardbg rounded-xl overflow-hidden">
            <div className="proImg w-1/2 p-12 bg-port-gray">
              <img src={signprice} className="rounded-xl" alt="signprice" />
            </div>
            <div className="proDetails w-1/2 p-12">
              <h4 className="text-secondary text-2xl mb-6 font-semibold">
                Sign Price calculator - UI/UX Design
              </h4>
              <p className="text-base mb-6">
                For the sign price calculator app, I employed a comprehensive UX
                methodology, including user research, persona creation, and user
                journey mapping. I developed a cohesive typography and color
                system for visual consistency and accessibility. By designing
                reusable UI components, I streamlined the development process
                and ensured uniformity. The app's intuitive and responsive
                interface, suitable for web and mobile, simplified price
                calculations and provided instant feedback. Positive feedback
                highlighted the app's ease of use and aesthetic appeal,
                demonstrating successful UX principles and responsive design
                integration.
              </p>
              <div className="flex gap-2 mb-6">
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  JavaScript
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  HTML/CSS
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX A/B Testing
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX Research
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  Figma
                </div>
              </div>
              <a href="https://www.figma.com/design/gOiTNF6ujvXvDSgBzgSm0T/Sign-Price-Calculator?node-id=10-743&t=NmMWekwVNyANAs1H-1">
                <img src={redirect} alt="redirect" />
              </a>
            </div>
          </div>
          <div className="port-card flex bg-cardbg rounded-xl overflow-hidden">
            <div className="proImg w-1/2 p-12 bg-port-gray">
              <img src={sleep} className="rounded-xl" alt="sleep" />
            </div>
            <div className="proDetails w-1/2 p-12">
              <h4 className="text-secondary text-2xl mb-6 font-semibold">
                SleepCountry Canada - Fron-End Development
              </h4>
              <p className="text-base mb-6">
                Following my work with Conn's, I took on a TL role in an
                Agile-based project for Baseline IT Developments, focused on
                BigCommerce. As the team lead of the design team, we crafted a
                comprehensive e-commerce theme from scratch using BigCommerce
                Stencil CLI, based on Figma UX designs. I created the design
                system for the website and developed reusable components to
                ensure consistency and efficiency. Additionally, I developed
                custom widgets for landing pages, providing the marketing team
                with easy-to-configure options via the dashboard, enabling them
                to utilize these widgets seamlessly
              </p>
              <div className="flex gap-2 mb-6">
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  JavaScript
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  HTML/CSS
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX A/B Testing
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  UX Research
                </div>
                <div class="w-fit text-sm bg-port-gray py-1 px-5 rounded-xl font-medium">
                  Figma
                </div>
              </div>
              <a href="https://www.sleepcountry.ca/">
                <img src={redirect} alt="redirect" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

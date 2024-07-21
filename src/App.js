import logo from "./img/Logo.svg";
import heroImg from "./img/heroImg.png"
import btnIcon from "./img/btnIcon.svg"
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav className="my-4">
          <div className="container mx-auto flex items-center justify-between">
            <img src={logo} alt="Logo" />
            <ul className="flex gap-4 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="my-10">
          <div className="container flex items-center justify-between mx-auto">
            <div className="heroText text-white">
              <span className="mb-2 text-base">Hello</span>
              <h1 className="mb-4 text-5xl">I'm <span>Nilesh Jaswal</span></h1>
              <h2 className="mb-2 text-2xl">Web & UI Designer</h2>
              <p className="mb-8 text-base">I build pixel-perfect, engaging, and accessible digital experiences.</p>
              <a href="/" className="buttonPrimary flex gap-1 items-center"><img src={btnIcon} alt="btnIcon" />Contact Me</a>
            </div>
            <div className="heroImg">
              <img src={heroImg} alt="heroImg" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

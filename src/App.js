import "./App.css";
import NavbarCustom from "./components/NavbarCustom";
import Hero from "./components/Hero";
import Specialized from "./components/Specialized";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <header>
        <NavbarCustom></NavbarCustom>
      </header>
      <main>
        <Hero name="Nilesh Jaswal"></Hero>
        <Specialized></Specialized>
        <Experience></Experience>
      </main>
    </>
  );
}

export default App;

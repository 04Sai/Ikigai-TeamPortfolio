import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Members from "./components/Members";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="body relative">
      <NavBar />
      <div className="content-wrapper">
        <Hero />
        <div className="content-sections">
          <div className="h-screen"></div>{" "}
          {/* Spacer to push content below hero */}
          <About />
          <Members />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;

import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Members from "./components/Members";

function App() {
  return (
    <main className="body relative">
      <NavBar />
      <div className="content-wrapper pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Hero />
        <About />
        <Members />
      </div>
    </main>
  );
}

export default App;

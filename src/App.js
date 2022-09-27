import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PostFetch from "./components/PostFetch";






function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <PostFetch />
     <Experience />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;

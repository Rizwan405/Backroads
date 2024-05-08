import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tour from "./components/Tour";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
}

export default App;

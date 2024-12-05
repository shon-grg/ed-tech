import "./app.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import TrainingPrograms from "./pages/trainingPrograms/TrainingPrograms";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="trainingprograms">
          <TrainingPrograms />
        </section>
        <section id="aboutus">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* ChatBot Component */}
      <ChatBot />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

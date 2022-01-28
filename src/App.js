import Certifications from "./Components/Certifications";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import FunFact from "./Components/FunFact";
import LandingScreen from "./Components/LandingScreen";
import AppHeader from "./Components/Navbar";
import Projects from "./Components/Projects";

import Services from "./Components/Services";

function App() {
  return (
    <div>
      <AppHeader />
      <LandingScreen />
      <Services />
      <Certifications />
      <Projects />
      {/* <Education /> */}
      <FunFact />
      <Footer />
    </div>
  );
}

export default App;

import Certifications from "./Components/Certifications";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import FunFact from "./Components/FunFact";
import Hire from "./Components/Hire";
import LandingScreen from "./Components/LandingScreen";
import AppHeader from "./Components/Navbar";
import Projects from "./Components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Designs from "./Components/Designs";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route
          element={[
            <LandingScreen />,
            <Services />,
            <Certifications />,
            <Projects />,
            <FunFact />,
          ]}
          path="/"
        />
        {/* <Route element={<Services />} path="/" />
        <Route element={<Certifications />} path="/" />
        <Route element={<Projects />} path="/" />
        <Route element={<FunFact />} path="/" /> */}
      </Routes>
      {/* <LandingScreen />
      <Services />
      <Certifications />
      <Projects />
      <FunFact /> */}
      <Routes>
        <Route element={<Hire />} path="/hire" />
      </Routes>
      <Routes>
        <Route element={<Designs />} path="/designs" />
      </Routes>
      {/* <Hire /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";

import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import About from "../About/About";
import Problems from "../Problems/Problems";
import Pipeline from "../Pipeline/Pipeline";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import SignUp from "../SignUp/SignUp";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="background-square"></div>
      <Header />
      <Offer />
      <About />
      <Problems />
      <Pipeline />
      <Services />
      <Reviews />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;

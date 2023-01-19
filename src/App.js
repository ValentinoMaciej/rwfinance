import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

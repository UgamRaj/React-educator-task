import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Quote from "./components/Quote/Quote";
import Quotes from "./Quotes.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Quote quote={Quotes} />
      <Footer />
    </div>
  );
}

export default App;

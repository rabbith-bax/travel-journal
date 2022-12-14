import "./App.css";
import Data from "./Data";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Header />
      {cards}
      <Footer />
    </div>
  );
}

export default App;

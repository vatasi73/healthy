import About from "./about/About";
import Header from "./header/Header";
import YourFavouriteFood from "./your favourite food/YourFavouriteFood";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <YourFavouriteFood />
        <About />
      </main>
    </div>
  );
}

export default App;

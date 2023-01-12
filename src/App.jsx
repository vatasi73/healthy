import About from "./sections/about/About";
import Header from "./component/header/Header";
import YourFavouriteFood from "./sections/yourFavouriteFood/YourFavouriteFood";
import Work from "./sections/work/Work";
import Dishes from "./sections/dishes/Dishes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <YourFavouriteFood />
        <About />
        <Work />
        <Dishes />
      </main>
    </div>
  );
}

export default App;

import About from "./sections/about/About";
import Header from "./component/header/Header";
import YourFavouriteFood from "./sections/yourFavouriteFood/YourFavouriteFood";
import Work from "./sections/work/Work";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <YourFavouriteFood />
        <About />
        <Work />
      </main>
    </div>
  );
}

export default App;

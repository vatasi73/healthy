import About from "./sections/about/About";
import Header from "./component/header/Header";
import YourFavouriteFood from "./sections/yourFavouriteFood/YourFavouriteFood";
import Work from "./sections/work/Work";
import Dishes from "./sections/dishes/Dishes";
import Chefs from "./sections/chefs/Chefs";
import Recipes from "./sections/recipes/Recipes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <YourFavouriteFood />
        <About />
        <Work />
        <Dishes />
        <Chefs />
        <Recipes />
      </main>
    </div>
  );
}

export default App;

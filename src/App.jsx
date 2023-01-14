import About from "./sections/about/About";
import Header from "./component/header/Header";
import YourFavouriteFood from "./sections/yourFavouriteFood/YourFavouriteFood";
import Work from "./sections/work/Work";
import Dishes from "./sections/dishes/Dishes";
import Chefs from "./sections/chefs/Chefs";
import Recipes from "./sections/recipes/Recipes";
import Social from "./sections/social/Social";

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
        <Social />
      </main>
    </div>
  );
}

export default App;

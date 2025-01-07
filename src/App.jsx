
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import MealInfo from "./components/MealInfo";

const App = () => {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='/:mealid' element={<MealInfo />} />
        </Routes>
      </div>
    </>
  )
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";  

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

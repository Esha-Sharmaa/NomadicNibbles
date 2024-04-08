import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RecipeDetail from "./components/RecipeDetail";  
import Body from "./components/Body";
import Footer from "./components/Footer"
function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

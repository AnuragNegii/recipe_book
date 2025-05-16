import Search from "./components/Search"
import "./App.css"
import RecipeList from "./components/RecipeList.jsx";
import AddRecipe from "./components/AddRecipe.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="recipe-header">
        <h1>Hello! Which recipe are you looking For</h1>
        <AddRecipe className="add-recipe-button"/>
      </div>
      <Search />
      <RecipeList />
    </div>
  )
}

export default App

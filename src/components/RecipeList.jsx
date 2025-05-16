import RecipeCard from "./RecipeCard.jsx";
import "./RecipeList.css";

function RecipeList() {
  return (
    <div className="horizontal-scroll-container">
      <ul className="horizontal-list">
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
        <li><RecipeCard /></li>
      </ul>
    </div>
  );
}

export default RecipeList;


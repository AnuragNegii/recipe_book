import "./RecipeCard.css"
import eggImage from '../assets/egg.webp'

function RecipeCard() {
  return (
    <div className="recipe-card">
      <img src={eggImage} alt="Recipe" className="recipe-image" />
      <h3 className="recipe-title">Recipe Title</h3>
    </div>
  )
}

export default RecipeCard

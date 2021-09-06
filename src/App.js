import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./app.css"
import Alert from "./components/alert/Alert";
import Recipe from "./components/recipes/Recipe";

function App() {

  // API keys and ID
  const APP_ID = "4f467422";
  const APP_KEY = "7c2b13f55589bd6f5e89ec7aba47f443";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [alert, setAlert] = useState("")

  useEffect(() => {
    getRecipe();
  }, [query]);

// getting recipe API 
  const getRecipe = async () => {
    if (query !== "") {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
      if (!response.data.more) {
        return setAlert("No food with search name");
      }
      setRecipes(response.data.hits);
      console.log(response.data.hits);
      setAlert("");
    } else {
      setAlert("Enter the food Name")
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="container p-4">
      <form onSubmit={updateQuery} className="form-main">
        <h2>Food Search App</h2>
        <div className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <input type="text" value={search} placeholder="search here" onChange={updateSearch} />
          <button type="submit"><i className="bi bi-search"></i></button>
        </div>
      </form>
      <div className="Main-recipes">
        {recipes.map((recipe, i) => {
          return (

            <div key={i}>
              <Recipe
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default App;

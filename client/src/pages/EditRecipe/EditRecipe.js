import { Route } from "react-router-dom";
import AddRecipeTitle from "../../components/AddRecipeTitle";
import "./EditRecipe.css";
import avatar from "../../components/UI/images/1.jpg";
import axios from "axios";
import { useCurrentUser } from "../../Helpers/userContext";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EditRecipe = () => {
  const [currentUser, getUser] = useCurrentUser();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [recipeData, setRecipeData] = useState({});
  const recipe = searchParams.get("recipe");

  useEffect(() => {
    getUser();
    if (
      typeof currentUser === undefined ||
      currentUser === null ||
      currentUser.token === null
    ) {
      navigate("/login");
    } else {
      getRecipeData();
    }
  }, []);

  const getRecipeData = () => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${currentUser.token}`,
    };
    axios
      .get(`http://localhost:5000/recipes/${recipe}`)
      .then((response) => {
        setRecipeData(response.data.recipes);
      })
      .catch((error) => console.log(error));
  };

  const UpdateRecipeHandler = (event) => {
    event.preventDefault();

    let title = event.target[0].value;
    let category = event.target[1].value;
    let preparationTime = event.target[2].value;
    let numberOfPeople = event.target[3].value;
    let shortDescription = event.target[4].value;
    let description = event.target[6].value;
    let user = currentUser.userId;

    axios
      .post(`http://localhost:5000/recipes/${recipe}/update`, {
        title,
        category,
        preparationTime,
        numberOfPeople,
        shortDescription,
        description,
        user,
      })
      .then((response) => {
        console.log(response);
        alert("Recipe updated");
        navigate("/myRecipes");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <>
      <AddRecipeTitle title={"My Recipes"} />

      <form onSubmit={UpdateRecipeHandler} className="recipe-form">
        <div className="img-info">
          <h4 htmlFor="recipeImg">Recipe Image</h4>
          <img src={avatar} alt="Avatar" />
          <form action="/upload" method="POST">
            <input type="file" id="files" style={{ visibility: "hidden" }} />
            <label for="files">Select file</label>
          </form>
        </div>
        <div className="form-info">
          <div className="form-names">
            <label htmlFor="recipeTitle">Recipe Title</label>
            <input
              id="recipeTitle"
              placeholder="John"
              name="recipeTitle"
              defaultValue={recipeData.title}
            />
          </div>
          <div className="form-inside">
            <div className="form-names">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                selected={recipeData.category}
              >
                <option value="breakfast">Breakfast</option>
                <option value="brunch">Brunch</option>
                <option value="dinner">Dinner</option>
                <option value="lunch">Lunch</option>
              </select>
            </div>
            <div className="form-names">
              <label htmlFor="prepTime">Preparation Time</label>
              <input
                id="prepTime"
                name="prepTime"
                placeholder="45"
                defaultValue={recipeData.preparationTime}
              />
            </div>
            <div className="form-names">
              <label htmlFor="numberOfPeople">No. People</label>
              <input
                id="numberOfPeople"
                name="numberOfPeople"
                placeholder="4"
                defaultValue={recipeData.numberOfPeople}
              />
            </div>
          </div>
          <div className="form-names-shortDesp">
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              id="shortDesc"
              name="shortDesc"
              placeholder="aaa"
              defaultValue={recipeData.shortDescription}
            />
          </div>
          <button type="submit">SAVE</button>
        </div>
        <div className="recipe-info">
          <h4 htmlFor="recipe">Recipe</h4>
          <textarea
            id="recipe"
            name="recipe"
            placeholder="heheheeeeeeeeeeeeeeeeeeeeee"
            defaultValue={recipeData.description}
          />
        </div>
      </form>
    </>
  );
};

export default EditRecipe;
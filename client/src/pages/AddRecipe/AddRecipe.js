import AddRecipeTitle from '../../components/AddRecipeTitle';
import './AddRecipe.css';
import avatar from '../../components/UI/images/1.jpg';
import axios from 'axios';
import { useCurrentUser } from '../../Helpers/userContext';
import { useEffect } from 'react';

const AddRecipe = () => {
  const { currentUser, getUser } = useCurrentUser();

  useEffect(() => { 
    getUser();
  }, []); 

  const addRecipeHandler = (event) => {
    event.preventDefault();

      let title = event.target[0].value;
      let category = event.target[1].value;
      let preparationTime = event.target[2].value;
      let numberOfPeople = event.target[3].value;
      let shortDescription = event.target[4].value;
      let description = event.target[6].value;
      // let user = currentUser.userId;
      let user = "629f3b53744f5cb58ea7b6a4";

    axios.post("http://localhost:5000/recipes/create", { title, category, preparationTime, numberOfPeople, shortDescription, description, user })
    .then((response) => {
      console.log(response);
      alert("OK");
    })
    .catch((error) => console.log("error"));
  };

  return (
    <>
      <AddRecipeTitle title={'My Recipes'} />

      <form onSubmit={addRecipeHandler} className='recipe-form'>
        <div className='img-info'>
          <h4 htmlFor='recipeImg'>Recipe Image</h4>
          <img src={avatar} alt="Avatar" />
          <form action="/upload" method="POST">
            <input type="file" id="files" style={{ visibility: "hidden" }} />
            <label for="files">Select file</label>
          </form>
        </div>
        <div className='form-info'>
          <div className='form-names'>
            <label htmlFor='recipeTitle'>Recipe Title</label>
            <input
              id='recipeTitle'
              placeholder='John'
              name='recipeTitle'
            />
          </div>
          <div className='form-inside'>
            <div className='form-names'>
              <label htmlFor='category'>Category</label>
              <select id='category' name='category'>
                <option selected="selected">
                  Select
                </option>
                <option value='Breakfast'>
                  Breakfast
                </option>
                <option value='Brunch'>
                  Brunch
                </option>
                <option value='Dinner'>
                  Dinner
                </option>
                <option value='Lunch'>
                  Lunch
                </option>
              </select>
            </div>
            <div className='form-names'>
              <label htmlFor='prepTime'>Preparation Time</label>
              <input
                id='prepTime'
                name='prepTime'
                placeholder='45'
              />
            </div>
            <div className='form-names'>
              <label htmlFor='numberOfPeople'>No. People</label>
              <input
                id='numberOfPeople'
                name='numberOfPeople'
                placeholder='4'
              />
            </div>
          </div>
          <div className='form-names-shortDesp'>
            <label htmlFor='shortDesc'>Short Description</label>
            <textarea
              id='shortDesc'
              name='shortDesc'
              placeholder='aaa'
            />
          </div>
          <button type='submit'>SAVE</button>
        </div>
        <div className='recipe-info'>
          <h4 htmlFor='recipe'>Recipe</h4>
          <textarea
            id='recipe'
            name='recipe'
            placeholder='heheheeeeeeeeeeeeeeeeeeeeee'
          />
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
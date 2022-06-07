import AddRecipeTitle from '../../components/AddRecipeTitle';
import './AddRecipe.css';
import avatar from '../../components/UI/images/1.jpg';

const AddRecipe = () => {
  return (
    <>
      <AddRecipeTitle title={'My Recipes'} />

        <form className='recipe-form'>
          <div className='img-info'>
            <h4 htmlFor='recipeImg'>Recipe Image</h4>
            <img src={avatar} alt="Avatar" />
            <form action="/upload" method="POST">
              <input type="file" id="files" style={{visibility: "hidden"}}/>
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
                <input
                  type='date'
                  id='category'
                  name='category'
                />
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
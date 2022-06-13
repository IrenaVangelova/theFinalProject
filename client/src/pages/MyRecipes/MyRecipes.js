import { useState, useEffect } from 'react';

import MyRecipeTitle from '../../components/MyRecipeTitle';
import './MyRecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan
} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';


const MyRecipes = () => {

  const [myRecipes, setMyRecipes] = useState([]);

  const get = () => {
    axios
      .post("http://localhost:5000/recipes/myRecipes", { user: '629f3b53744f5cb58ea7b6a4' })
      .then((res) => {
        console.log(res.data.recipes);
        setMyRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteHandler = () => {

  };

  useEffect(() => {
    get();
  }, []);

  // useEffect(() => {
  //   get();
  // }, [myRecipes]);

  return (
    <>
      <MyRecipeTitle title={'My Recipes'} />
      <table>
        <tr className='property-names'>
          <th>Recipe Name</th>
          <th>Category</th>
          <th>Created On</th>
          <th>Delete</th>
        </tr>
        {myRecipes.map((item) => {
          return (
            <tr className='table-info' key={item._id}>
              <td style={{fontWeight: "bold", color: "var(--midgrey)"}}>{item.title}</td>
              <td style={{font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 12px/22px var(--unnamed-font-family-roboto)",
letterSpacing: "var(--unnamed-character-spacing-0)",
color: "var(--white)",
textAlign: "center",
textTransform: "uppercase",
opacity: "1"}}><div className='my-recipes-category'>{item.category}</div></td>
              <td>{item.createdOn}</td>
              <td><FontAwesomeIcon icon={faTrashCan} color="gray" style={{ width: "16.6px", height: "30.1px", cursor: "pointer" }} onClick={deleteHandler} /></td>
            </tr>
          );
        })}

      </table>
    </>
  );
};

export default MyRecipes;
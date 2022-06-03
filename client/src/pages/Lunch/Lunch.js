import SectionTitle from '../../components/sectionTitle';
import Card from '../../components/UI/Card/Card';
import React, { useEffect, useState } from "react";
import axios from "axios";

const Lunch = () => {

    const [recipes, setRecipes] = useState({});

    const get = () => {
      axios
        .get("http://localhost:3000/recipes")
        .then((res) => {
          setRecipes(res.data.recipes);
          console.log(res.data.recipes);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    useEffect(() => {
      get();
    }, []);

    return (
        <div>
            <SectionTitle title={'Lunch'} />
            <div className='cards-fresh-and-new' style={{display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem'}}>
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
      </div>
        </div>
    )
}

export default Lunch;
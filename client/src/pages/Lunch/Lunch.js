import SectionTitle from "../../components/sectionTitle";
import Card from "../../components/UI/Card/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Lunch = (props) => {
  const [recipes, setRecipes] = useState([]);

  const get = () => {
    axios
      .get("http://localhost:5000/recipes/category/lunch")
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
      <SectionTitle title={"Lunch"} />
      <div
        className="cards-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          flexWrap: "wrap"
        }}
      >
        {recipes.map((item) => {
          return (
            <Card
              key={item._id}
              imgUrl={
                "https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg"
              }
              title={item.title}
              category={item.category}
              shortDescription={item.shortDescription}
              preparationTime={item.preparationTime}
              numberOfPeople={item.numberOfPeople}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Lunch;
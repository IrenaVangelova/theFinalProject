import SectionTitle from "../../components/sectionTitle";
import Card from "../../components/UI/Card/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "../../Helpers/userContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";

const Lunch = (props) => {
  const [currentUser, getUser] = useCurrentUser();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [recipes, setRecipes] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

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

  const openModalHandler = (event) => {
    setModalData(event.currentTarget.id);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setModalData({});
  };

  const likeHandler = (event) => {
    if (
      typeof currentUser === undefined ||
      currentUser === null ||
      currentUser.token === null
    ) {
      navigation("/login");
    } else {
      let recipeId = event.currentTarget.id;
      let userId = currentUser.userId;

      axios
        .post("http://localhost:5000/recipes/like", { recipeId, userId })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let modal = null;

  if (showModal === true) {
    modal = <Modal closeModal={closeModalHandler} show={showModal} data={modalData} like={likeHandler} />;
  } else {
    modal = null;
  }
  return (
    <div>
      <SectionTitle title={"Lunch"} />
      <div
        className="cards-content"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
          flexWrap: "wrap",

        }}
      >
        {recipes.map((item) => {
          return (
            <Card
              key={item._id}
              id={item._id}
              imgUrl={
                "https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg"
              }
              title={item.title}
              category={item.category}
              shortDescription={item.shortDescription}
              preparationTime={item.preparationTime}
              likes={item.likes}
              numberOfPeople={item.numberOfPeople}
              openModal={openModalHandler}
              like={likeHandler}
            />
          );
        })}
      </div>
      {modal}
    </div>
  );
};

export default Lunch;
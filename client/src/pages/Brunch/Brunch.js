import SectionTitle from '../../components/sectionTitle';
import Card from '../../components/UI/Card/Card';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";

const Brunch = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const get = () => {
      axios
        .get("http://localhost:5000/recipes/category/brunch")
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
  
    let modal = null;
  
    if (showModal === true) {
      modal = <Modal closeModal={closeModalHandler} show={showModal} data={modalData}/>;
    } else {
      modal = null;
    }
    
    return (
      <div>
        <SectionTitle title={"Brunch"} />
        <div
          className="cards-content"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1rem",
            flexWrap: "wrap"
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
                numberOfPeople={item.numberOfPeople}
                openModal={openModalHandler}
              />
            );
          })}
        </div>
        {modal}
      </div>
    );
}

export default Brunch;
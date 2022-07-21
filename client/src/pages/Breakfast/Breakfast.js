import SectionTitle from '../../components/sectionTitle';
import Card from '../../components/UI/Card/Card';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";
import { useCurrentUser } from "../../Helpers/userContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Breakfast = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentUser, getUser] = useCurrentUser();

  const navigation = useNavigate();

  useEffect(() => {
    getUser();
  }, []);


  const get = (page) => {
    axios
      .get("http://localhost:5000/recipes/category/breakfast/" + page)
      .then((res) => {
        setRecipes(res.data.recipes);
        console.log(res.data.recipes);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    get();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(recipes.length);

  const openModalHandler = (event) => {
    setModalData(event.currentTarget.id);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setModalData({});
  };
  
  const prevPageHandler = () => {
    if (currentPage - 1 < 0) return;
    setCurrentPage(currentPage - 1);
    get(currentPage);
  };
  const nextPageHandler = () => {
    if (currentPage + 1 > totalPages - 1) return;
    setCurrentPage(currentPage + 1);
    get(currentPage);
  };

  useEffect(() => {
    get(currentPage);
    console.log(currentPage);
  }, [currentPage]);

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
      <SectionTitle title={"Breakfast"} />
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
                "http://localhost:5000/" + item.image
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
      <div className="pagination-arrows" style={{ marginTop: "3rem" }}>
        <button onClick={prevPageHandler}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="gray"
            style={{
              width: "16.6px",
              height: "30.1px",
              cursor: "pointer",
            }}
          />
        </button>
        <span>&nbsp;&nbsp;{currentPage + 1}&nbsp;&nbsp;</span>
        <button onClick={nextPageHandler}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color="gray"
            style={{
              width: "16.6px",
              height: "30.1px",
              cursor: "pointer",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Breakfast;
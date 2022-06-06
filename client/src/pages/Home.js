import { useEffect, useState } from "react";
import SectionTitle from "../components/sectionTitle";
import Card from "../components/UI/Card/Card";
import Modal from "../components/UI/Modal/Modal";
import axios from "axios";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);

  const getLatest = () => {
    axios
      .get("http://localhost:5000/recipes/latest")
      .then((res) => {
        console.log(res.data.recipes);
        setLatest(res.data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getPopular = () => {
    axios
      .get("http://localhost:5000/recipes/popular")
      .then((res) => {
        setPopular(res.data.recipes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getLatest();
    getPopular();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SectionTitle title={"Fresh & New"} />
      <div
        className="cards-fresh-and-new"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2.5rem",
        }}
      >
        {latest.map((item) => {
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
      <SectionTitle title={"Most Popular Recipes"} />
      <div
        className="cards-fresh-and-new"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2.5rem",
          flexWrap: "wrap"
        }}
      >
        {popular.map((item) => {
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
    </>
  );
};

export default Home;
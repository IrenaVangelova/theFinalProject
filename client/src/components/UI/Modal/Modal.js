import React, { useState, useEffect } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faClock,
    faStar,
    faAnglesRight,
    faX,
} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Modal = (props) => {

    const { data, show, closeModal } = props;
    const [item, setItem] = useState([]);

    const get = () => {
        axios
            .get("http://localhost:5000/recipes/" + data)
            .then((res) => {
                setItem(res.data.recipes);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        get();
    }, []);

    return show ? (
        <>
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-header">
                        <h5>{item.title}</h5>
                        <button onClick={closeModal}>
                            <FontAwesomeIcon icon={faX} color='gray' />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-left">
                            <img src="https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg" alt="image" />
                            <div className="category-info">
                                <h5>Best Served For</h5>
                                <div className='type-recipe'>{item.category}</div>
                            </div>
                            <p>{item.shortDescription}</p>
                            <div className='card-icons'>
                                <div className='card-time'>
                                    <FontAwesomeIcon icon={faClock} color='gray' />{' '}
                                    {item.preparationTime} min
                                </div>
                                <div className='card-people'>
                                    <FontAwesomeIcon icon={faUtensils} color='gray' />{' '}
                                    {item.numberOfPeople} people
                                </div>
                                <div className='card-stars'>
                                    <FontAwesomeIcon icon={faStar} color='gray' /> 30
                                </div>
                            </div>
                        </div>
                        <div className="modal-right">
                            <h5>
                                Recipe Details
                            </h5>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (<></>);
};

export default Modal;
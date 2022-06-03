import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faClock,
    faStar,
    faAnglesRight,
    faX,
} from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    const { imgUrl, title, category, shortDescription, preparationTime, numberOfPeople, description } = props;
    return (
        <>
            <div className={styles.darkBG} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{title}</h5>
                    </div>
                    <button className={styles.closeBtn}>
                        <FontAwesomeIcon icon={faX} color='gray' />
                    </button>
                    <div className={styles.modalContent}>
                        <div className="card-info">
                            <div className='card-top' style={{ backgroundImage: `url(${imgUrl})` }}>
                            </div>
                            <div>
                                <h5>Best Served For</h5>
                                <div className='recipe-type'>{category}</div>
                            </div>
                            <p>{shortDescription}</p>
                            <div className='card-icons'>
                                <div className='card-time'>
                                    <FontAwesomeIcon icon={faClock} color='gray' />{' '}
                                    {preparationTime} min
                                </div>
                                <div className='card-people'>
                                    <FontAwesomeIcon icon={faUtensils} color='gray' />{' '}
                                    {numberOfPeople} people
                                </div>
                                <div className='card-stars'>
                                    <FontAwesomeIcon icon={faStar} color='gray' /> 30
                                </div>
                                <div className='card-button'>
                                    <button>
                                        <FontAwesomeIcon icon={faAnglesRight} color='white' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="long-description">
                            <h5>
                                Recipe Details
                            </h5>
                            <p>
                                Foods similar to pizza have been made since the Neolithic Age.
                                Records of people adding other ingredients to bread to make it more
                                flavorful can be found throughout ancient history. In the 6th
                                century BC, the Persian soldiers of the Achaemenid Empire during the
                                rule of Darius the Great baked flatbreads with cheese and dates
                                on top of their battle shields[24][25] and the ancient Greeks supplemented
                                their bread with oils, herbs, and cheese.[26][27] An early reference to a
                                pizza-like food occurs in the Aeneid, when Celaeno, queen of the Harpies,
                                foretells that the Trojans would not find peace until they are forced by
                                hunger to eat their tables (Book III). In Book VII, Aeneas and his men
                                are served a meal that includes round cakes (like pita bread) topped
                                with cooked vegetables. When they eat the bread, they realize that these
                                are the "tables" prophesied by Celaeno.[28] The first mention of the word
                                "pizza" comes from a notarial document written in Latin and dating to May
                                997 AD from Gaeta, demanding a payment of "twelve pizzas, a pork shoulder,
                                and a pork kidney on Christmas Day, and 12 pizzas and a couple of chickens
                                on Easter Day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
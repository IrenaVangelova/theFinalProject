
import { useState } from 'react';
import SectionTitle from '../components/sectionTitle';
import Card from '../components/UI/Card/Card';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    console.log(showModal);
    if (showModal === true) {
      setShowModal(false);
    }
    else {
      setShowModal(true);
    }
  }
  return (
    <>
      <SectionTitle title={'Fresh & New'} />
      <div className='cards-fresh-and-new' style={{display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem'}}>
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} showModal={modalHandler} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
      </div>
      <SectionTitle title={'Most Popular Recipes'} />
      <div className='cards-fresh-and-new' style={{display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem'}}>
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
      </div>
    </>
  );
};

export default Home;
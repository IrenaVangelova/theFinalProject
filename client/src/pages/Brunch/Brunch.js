import SectionTitle from '../../components/sectionTitle';
import Card from '../../components/UI/Card/Card';
const Brunch = () => {
    return (
        <div>
            <SectionTitle title={'Brunch'} />
            <div className='cards-fresh-and-new' style={{display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem'}}>
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
        <Card imgUrl={'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg'} title={'Pizza'} category={'Lunch'} shortDescription={'Brbrbr'} preparationTime={20} numberOfPeople={2} />
      </div>
        </div>
    )
}

export default Brunch;
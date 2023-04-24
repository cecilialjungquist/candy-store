import { useEffect } from 'react';
import CandyCard from '../Components/CandyCard.jsx';
import { loadData } from '../actions/actionTypes.js';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
    const allCandy = useSelector(state => state.candy);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData());
    }, [])
    

    const candyCards = allCandy.map(item => <CandyCard item={item} key={item.id} />)

    return (
        <main className="container">
            <h2>Welcome to the world of Candy!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, porro! Nemo perspiciatis quos rerum eius maxime voluptatum velit aut voluptate ipsa iure vero nisi sed, distinctio quisquam at, iste voluptates.</p>
            <section className='candy-cards'>
                {candyCards}
            </section>
        </main>
    );
}

export default HomePage;
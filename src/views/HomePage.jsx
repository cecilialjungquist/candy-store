import { useEffect, useState } from 'react';
import { fetchData } from '../api/api.js';
import CandyCard from '../Components/CandyCard.jsx';

function HomePage() {
    const [allCandy, setAllCandy] = useState([]);

    useEffect(() => {
        console.log('useEffect körs')
        async function fetch() {
            const data = await fetchData();
            setAllCandy(data);
        }
        fetch();
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
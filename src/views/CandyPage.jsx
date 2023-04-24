import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import AddButton from "../Components/AddButton";

function CandyPage() {
    const candyToGet = parseInt(useParams().id);
    const candyList = useSelector(state => state.candy);

    const [ candy ] = candyList.filter(candy => candy.id === candyToGet);

    return (  
        <main className="container">
            {
                candy ? 
                <>
                    <h2>{candy.name}</h2>
                    <p>{candy.price} kr</p>
                    <AddButton item={candy} />
                </> :
                <>
                    <p>Ooops, something went wrong!</p>
                    <Link to="/">
                        <button className="primary-btn">Go back</button>
                    </Link>
                </>
            }
        </main>
    );
}

export default CandyPage;
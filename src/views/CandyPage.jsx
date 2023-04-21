import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCandy } from "../actions/actionTypes";

function CandyPage() {
    const candyToGet = useParams();
    console.log(candyToGet)
    const candyList = useSelector(state => state.candy);
    console.log(candyList);

    return (  
        <main className="container">
            {/* <h2>{candy.name}</h2>
            <p>{candy.price}</p> */}
        </main>
    );
}

export default CandyPage;
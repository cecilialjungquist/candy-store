import { NavLink } from "react-router-dom";
import AddButton from "./AddButton.jsx";
import AddToCart from "./AddToCart.jsx";

function CandyCard({ item }) {

    return (
        <article className="candy-card">
            <NavLink to={`/${item.id}`}>
                <h2>{item.name}</h2>
                <p>{item.price} kr</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, enim!</p>
            </NavLink>
            <AddToCart item={item} />
        </article>
    );
}

export default CandyCard;
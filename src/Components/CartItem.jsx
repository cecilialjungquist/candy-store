import { useDispatch } from "react-redux";
import { removeFromCart } from "../actions/actionTypes";

function CartItem({ item }) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(removeFromCart(item));
    }

    return (  
        <article>
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
            <p className="price-col">{item.price * item.quantity} kr</p>
            <button className="delete-btn" onClick={handleClick}>X</button>
        </article>
    );
}

export default CartItem;
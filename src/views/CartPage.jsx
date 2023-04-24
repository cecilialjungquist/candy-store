import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { nanoid } from 'nanoid';
import { placeOrder } from "../actions/actionTypes";

function CartPage() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const itemElem = cart.map(item => <CartItem item={item} key={nanoid()} />);
    const itemsTotal = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
    const priceTotal = cart.reduce((total, item) => total + parseInt(item.price * item.quantity), 0);

    function handleOrder() {
        dispatch(placeOrder());
    }

    return (
        <main className="container">
            <h2>Cart Page</h2>
            <p>You have {itemsTotal} items in your cart.</p>
            <section className="cart-items">
                <section>
                    {itemElem}
                </section>
                {itemElem.length > 0 &&
                <>
                    <p>Total price {priceTotal} kr.</p>
                    <button className="order-btn" onClick={handleOrder}>Send order</button>
                </>
                }
            </section>
        </main>
    );
}

export default CartPage;
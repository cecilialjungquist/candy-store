import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { nanoid } from 'nanoid';

function CartPage() {
    const cart = useSelector(state => state.cart);

    const itemElem = cart.map(item => <CartItem item={item} key={nanoid()} />)

    return (  
        <main className="container">
            <h2>Cart Page</h2>
            <section>
                <p>You have {cart.length} items in your cart.</p>
                {itemElem}
            </section>
        </main>
    );
}

export default CartPage;
function CartItem({ item }) {
    return (  
        <article>
            <h4>{item.name}</h4>
            <p>{item.price} kr</p>
        </article>
    );
}

export default CartItem;
import { useState } from "react";
import AddButton from "./AddButton";

function AddToCart({ item }) {
    const [quantity, setQuantity] = useState(1);

    function handleChange(event) {
        setQuantity(event.target.value || 1);
    }

    return (  
        <>
            <input type="number" onChange={handleChange} value={quantity} />
            <AddButton item={item} quantity={quantity}/>
        </>
    );
}

export default AddToCart;
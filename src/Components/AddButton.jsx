import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actionTypes.js';

function AddButton({ item, quantity }) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(addToCart({...item, quantity}));
    }

    return (  
        <button onClick={handleClick} className="add-btn">Add to cart</button>
    );
}

export default AddButton;
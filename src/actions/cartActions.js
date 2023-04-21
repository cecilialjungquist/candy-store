const addToCart = (text) => {
    return {
        type: 'cart/addToCart',
        payload: text
    }
}
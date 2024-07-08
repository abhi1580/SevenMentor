import React, { useReducer } from "react";
import StationaryItemList from "./StationaryItemList";
import './ShoppingCart.css'; // Import the CSS file

// Global reducer function
function cartReducer(cart, action) {
    switch (action.type) {
        case "Add to cart":
            return [...cart, action.item];
        case "Remove":
            return cart.filter((item) => item.id !== action.id);
        default:
            return cart;
    }
}

const ShoppingCart = () => {
    const [cart, setCart] = useReducer(cartReducer, []);

    const addToCart = (item) => {
        setCart({ type: "Add to cart", item });
    };

    const removeFromCart = (item) => {
        setCart({ type: "Remove", id: item.id });
    };

    return (
        <div className="shopping-cart">
            <div className="stationary-list">
                <StationaryItemList onAdd={addToCart} />
            </div>
            <div className="cart-details">
                <h2>Your Shopping Cart Details:</h2>
                <h3>Total items in cart: {cart.length}</h3>
                {cart.length !== 0 ? (
                    <div className="cart-items">
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <span className="cart-item-name">{item.brand} {item.name}</span>
                                        <span className="cart-item-price">&#8377; {item.price}</span>
                                    </div>
                                    <button
                                        className="btn btn-outline-warning remove-btn"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;

import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id ,image, title, price, rating }) {
	const [{ Cart }, dispatch] = useStateValue();

	const removeFromCart = () => {
		//remove item from cart
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: id,
		})
	}

	return (
		<div className='CheckoutProduct'>
			<img className='CheckoutProduct__image' src={image}/>

			<div className='CheckoutProduct__info'>
				<p className='CheckoutProduct__title'>{title}</p>
				<p className="CheckoutProduct__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="CheckoutProduct__rating">
					{Array(rating)
					.fill()
					.map((_, i) => (
						<p>🌟</p>
					))}
				</div>
				<button onClick={removeFromCart}>Remove from Cart</button>
			</div>
		</div>
	)
}

export default CheckoutProduct;
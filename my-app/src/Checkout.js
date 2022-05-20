import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
const [{ Cart, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img 
					className="checkout__ad" 
					src=""
					alt=""
				/>

				<div>
					<h3>hello, {user?.email}</h3>
					<h2 className="checkout__title">Your Shopping Cart</h2>

					{Cart.map(item => (
						<CheckoutProduct
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
						/>
						))}
					
				</div>
			</div>

			<div className="checkout__right">
			<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
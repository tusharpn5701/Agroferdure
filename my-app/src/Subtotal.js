import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import {useHistory } from "react-router-dom";

function Subtotal() {

    const history = useHistory();
	const [{ Cart }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
			renderText={(value) => (
				<>
					<p>
						Total({Cart.length} items):
						<strong>{value}</strong>
					</p>
				</>
				)}	
				decimalScale={2}
				value={getCartTotal(Cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>

			<button onClick={e => history.push('/payment')}>Proceed to checkout</button>

		</div>

	)
}

export default Subtotal;
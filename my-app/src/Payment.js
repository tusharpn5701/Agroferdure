import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from './axios';


function Payment() {
	const [{ Cart, user }, dispatch] = useStateValue();
  const history = useHistory();

	 const stripe = useStripe();
	 const elements = useElements();
   
   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");

   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true); 
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {

       const getClientSecret = async () => {
         const response = await axios({
           method: 'post',
           url: '/payments/create?total=${getCartTotal(Cart) * 100}'
         });
         setClientSecret(response.data.clientSecret)

       }
       getClientSecret();
   }, [Cart] )

   console.log('THE SECRET IS >>>', clientSecret)


   const handleSubmit =async (event) => {

     event.preventDefault();
     setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement)
       }
     }).then(({ paymentIntent }) => {
       setSucceeded(true);
       setError(null)
       setProcessing(false)

       history.replace('/orders')

     })




     //const payload = await stripe



   }

   const handleChange = event=> {

     setDisabled(event.empty);
     setError(event.error ? event.error.message : "");


   }


    


	return (
		<div className='payment'>
			<div className='payment_container'>
			   <h1>
			      Checkout (<Link to="/checkout">{Cart?.length} items</Link>)
			   </h1>
              <div className='payment_section'>
                  <div className='payment_title'>
                    <h3>Delivery Address</h3>
                  </div>
                  <div className='payment_adress'>
                     <p>Bhagwan Mahavir Marg,</p>
                     <p>Kulamkhed,</p>
                     <p>Behind Old Municipal Hospital,</p>
                     <p>Malkapur, 443101</p>
                  </div>
              </div>

              <div className='payment_section'>
                  <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                   </div>
                   <div className='payment_items'>

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


              <div className='payment_section'>
                  <div className='payment_title'>
                   <h3>Payment Method</h3>
                  </div>
                  <div className="payment_details">
                     <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange}/>

                          <div className='payment_priceContainer'>
                          <CurrencyFormat
                             renderText={(value) => (
                               
                               <h3>Order Total: {value}</h3>
                               

                          )}
                          decimalScale={2}
                          value={getCartTotal(Cart)}

                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹"}
                          />
                          <button disabled={processing || disabled ||
                            succeeded}>
                            <span>{processing ? <p>Processing</p> :
                            "Buy Now"}</span>

                            </button>

                          </div>

                          {error && <div>{error}</div>}
                     </form>     
                  </div>
              </div>
			</div>
		</div>
	)
}

export default Payment 
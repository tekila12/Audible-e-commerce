import React,{useContext, useEffect, useState} from 'react'
import {CardElement, useStripe, useElements } from"@stripe/react-stripe-js"
import { CartContext } from '../../context/cart'
import {ImBook} from 'react-icons/im'
import {  useHistory, } from "react-router-dom";



const PaymentForm = () => {
  const { total} = useContext(CartContext)
  const {cart}= useContext(CartContext)
  const history = useHistory()
  const {clearCart} = useContext(CartContext)
  const [nameError, setNameError]=useState(null)
  const [name, setName] = React.useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
  
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{cart}]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, [cart]);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleChangeInput = async (event) => {
    const { value } = event.target;
    setDisabled(!value); 
    setNameError(value ? "" : "Please enter a name");
    setName(value)
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
     if (name.length > 0 ) {
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'name',
        },
      }
      
    });
     
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);     
      setProcessing(false);
      setSucceeded(true)
      clearCart()
    }
    }
    else{
      setNameError('please enter the name')
      setProcessing(false);    
    }
  }
  useEffect(()=>{
    setTimeout(() => {  
    if(succeeded){
      history.push('/')
    }
    }, 3000);
  },[history, succeeded])
 
console.log(name)
 
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className='checkout__top'>
      <h2 className='payment__cart'>1. Cart</h2>
      <h2 className='payment__checkout'>2. Checkout</h2>
      </div>
      <div className='payment__cont'>
       <label>Cardholder Name </label>
       <input 
        placeholder='Please enter your Cardholder Name'
        type="text"
        id="name"
        value={name}
        onChange={handleChangeInput}
         />
        {nameError && (
        <div className="card__error" role="alert">
          <h4>Please enter a Cardholder Name</h4>
        </div>
      )}
      </div>
      <div className="stripe__input">
          <label htmlFor="card__element">
            Credit or Debit Card
            </label>
          <p className="stripe__info">
            Test using this credit card : <span>4242 4242 4242 4242</span>
            <br />
            Enter any 5 digits for the zip code
            <br />
            Enter any 3 digits for the CVC
          </p>
        </div>    
    <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
    {error && (
        <div className="cards__error" role="alert">
          <h4>{error}</h4>
        </div>
      )}
      <div className='review__order'>
      <h3>Review Order</h3>
      <h4>Total amount to pay :<span className='total__payment'> ${total}</span></h4>
      <button
        className='purchase__button'
        disabled={processing || disabled || succeeded}
        id="submit"
      >     
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner">
              <ImBook/>
            </div>
          ) : (
            "Complete purchase"
          )}
        </span>
      </button>
      <button className='edit__button'onClick={()=> {history.push('/cart')}}>Edit Items</button>
      </div>
      <div className={succeeded  ? "result-message" : "result-message hidden"}>
       <img src='./audible/money.gif' alt=''/>
        <h1>Payment succeeded</h1>       
      </div>
  
    </form>
  );
}



export default PaymentForm
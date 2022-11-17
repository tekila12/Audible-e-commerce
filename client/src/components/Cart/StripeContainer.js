import React from 'react'
import {loadStripe} from '@stripe/stripe-js/pure';
import {Elements, } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY="pk_test_51IaINYEqJWuHZaMS8NbdFT8M7ssdvFXOqBO8gwn1MjQCJ9Mq5kYdraTFG4Y28iJD9xLtaWKJanVLLbjlZrduQKHv00uJ0WbJnu"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm   />
        </Elements>
    )
}
export default StripeContainer

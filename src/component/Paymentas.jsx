import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Paymentas = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);
    return (
        <div>
             <div>
            

            <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
          </Elements>
            </div>
        </div>
        </div>
    );
};

export default Paymentas;
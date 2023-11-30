import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useProvider from "../hooks/useProvider";

const CheckoutForm  = ({price}) => {

    console.log(price)
    const [clintSecret, setClintSecret] = useState('');
     const [error, setError] = useState('');
     const {user} = useProvider();
     const stripe = useStripe();
     const element = useElements();
      const axios = useAxiosSecure();
      useEffect(() => {
        axios.post('/create-payment-intent', {price: price})
        .then(res => {
          console.log(res.data.clintSite)
          setClintSecret(res.data.clintSite)
        })
      },[axios, price])
     

     const handleSubmit = async (e) => {
          e.preventDefault();
          
          if(!stripe || !element){
               return
         }

         const card = element.getElement(CardElement)

         if(card === null){
          return;
         }

         const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setError(error.message)
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clintSecret,{
          payment_method:{
            card: card,
            billing_details: {
              email:user?.email || "anonymous",
              name: user?.displayName || "anonymous"
            }
          }
        })

     }


     return (
          <form className="border bg-slate-50 border-black p-5 rounded-2xl" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className="btn btn-xs mt-6 text-center px-4 btn-primary btn-outline" type="submit" disabled={!stripe || !clintSecret}>
            Pay
          </button>
          <p className="text-orange-400 text-sm">{error}</p>
        </form>
     );
};

export default CheckoutForm ;
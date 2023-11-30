// import {loadStripe} from '@stripe/stripe-js';

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../shared/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const Payment = () => {
  const params = useParams();
  const axios = useAxiosSecure();
  console.log(params.id);
  const {data} = useQuery({
    queryKey: [params],
    queryFn: async () => {
      const fetch = await axios.get(`/getClassOne/${params?.id}`)
      return fetch?.data?.class
    }
  })
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Title title="your payment" />
        <div className="  h-screen  ">
          <div className="mx-96 p-10 rounded-2xl bg-orange-200">
            <CheckoutForm price={data?.price} />
          </div>
        </div>
      </Elements>
    </div>
  );
};

export default Payment;

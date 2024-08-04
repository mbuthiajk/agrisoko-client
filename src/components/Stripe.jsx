import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import axios from 'axios'
import { useState } from 'react'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe('pk_live_51KKNH8LTMjTVSXPxNHALpU9Jn4umygIJiQnxi50EI5mOnlbSPffRw64nIIYDf1r4tBIT42vfoXVj2hZxIAZH299I006Z7pYSwW')
const Stripe = ({ price, orderId }) => {
    const [clientSecret, setClientSecret] = useState('')
    const appearance = {
        theme: 'stripe'
    };

    const options = {
        appearance,
        clientSecret
    };
    const create_payment = async () => {
        try {
            const { data } = await axios.post('https://agrisoko-backend.vercel.app/api/order/create-payment', { price }, { withCredentials: true })
            console.log(data,price);
            setClientSecret(data.clientSecret)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className='mt-4'>
            {
                clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm orderId={orderId} />
                    </Elements>
                ) : <button onClick={create_payment} className='px-10 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-white'>Start Payment</button>
            }
        </div>
    )
}

export default Stripe
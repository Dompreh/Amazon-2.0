import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import { selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import {useSession} from 'next-auth/react'

function Checkout() {
  const total = useSelector(selectTotal)
  const items = useSelector(selectItems)
  const { data: session } = useSession()
  
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width="1050"
            height="250"
            objectFit="contain"
          />

          <div className="flex flex-col bg-white p-5 space-y-10">
            <h1 className="border-b text-3xl pb-4 bold">{items.length === 0 ? "Your Amazon Cart is empty" : "Shopping Cart"}</h1>

            {items.map((item, i) => (
              <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              rating={item.rating}
              image={item.image}
              hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">SubTotal ({items.length} items):{" "}
              <span className="font-bold">
                <Currency quantity={total} currency="USD"/>
              </span>
              </h2>

              <button disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                {!session ? "Sign In To Checkout" : "Proceed To Checkout"}
              </button>
            </>
          )} 
        </div>
      </main>
    </div>
  );
}

export default Checkout;

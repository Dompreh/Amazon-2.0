import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) {

    const dispatch = useDispatch();
  
    const addItemToBasket = () => {
      const products = {
        id,
        title,
        price,
        description,
        category,
        image,
        hasPrime,
        rating,
      };
  
      //push items into redux
      dispatch(addToBasket(products))
       
    };

 
    const remove =() =>{
      dispatch(removeFromBasket({id}) )  
    }

  return (
    <div className="grid grid-cols-5">
        <div>
    
      <Image src={image} width={200} height={200} objectFit="contain" />
        </div>
  

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
      {/* Middle */}
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>        
        <Currency quantity={price} currency="USD" />

        
      {hasPrime && (
        <div className="flex items-center space-x-2 ">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime"
            loading="lazy"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      </div>

        {/* Right add/remove buttons */}
     <div className="flex flex-col space-y-2 my-auto justify-self-end ">
     {/* <span className="w-6  h-6 text-center ml-10 font-extrabold bg-yellow-500 rounded-full text-black animate-pulse">{id}</span> */}
        <button className="button" onClick={addItemToBasket}>Add To Basket</button>
        <button className="button " onClick={remove}>Remove from Basket</button>
     </div>
    </div>
  );
}

export default CheckoutProduct;

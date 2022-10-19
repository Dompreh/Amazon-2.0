import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon, LocationMarkerIcon} from "@heroicons/react/outline"
import {signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

  const { data: session } = useSession()
  const items = useSelector(selectItems)

  const router = useRouter()
  return (
    <header className="sticky top-0 z-50">
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push('/')}
            src="https://links.papareact.com/f90"
            width={130}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className=" hidden  lg:flex text-white items-center mx-1">
          <div>
            <LocationMarkerIcon className="mt-1 w-[20px] h-[20px]"/>
          </div>
          <div className="font-bold">
          <h4 className="text-xs font-semibold text-gray-400 ">Deliver to</h4>
          <h3 className="text-sm">Ghana</h3>
          </div>
        
        </div>
        
        {/* search */}
        <div className="hidden sm:flex items-center cursor-pointer h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 ml-3">
            <input className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4" type="text" />
            <SearchIcon className="h-12 p-4"/>
        </div>

        {/* right */}
        <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? (() => signIn()) : (() => signOut())} className="link">
                <p className="md:text-sm">
                  {session ? `Hello, ${session.user.name.split(' ')[0]}`:"Hello, sign in"}
                </p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div className="link">
                <p className="md:text-sm">Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div onClick={() => router.push('/checkout') } className="relative link flex items-center">
                <span className="absolute w-4 h-4  right-0 top-0 md:right-10 text-center font-extrabold bg-yellow-500 rounded-lg text-black">{items.length}</span>

                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
            </div>
        </div>

      </div>
      {/* bottom nav */}
      <div className="flex bg-amazon_blue-light text-sm text-white space-x-3 p-2 pl-4 items-center">
        <p className="flex items-center link font-bold"><MenuIcon className="h-6 mr-1"/>
            All</p>
            <p className="link">Today's Deals</p>
            <p className="link">Customer Service</p>
            <p className="link">Registry</p>

            <p className="link hidden sm:inline">Gift Cards</p>
            <p className="link hidden sm:inline">Sell</p>
      </div>
    </header>
  );
}

export default Header;

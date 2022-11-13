import React from 'react'
import moment from 'moment'
import Currency from 'react-currency-formatter'
import { getSession } from 'next-auth/react'

function Order({id, amount, items, images, timestamp}) {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
            <div>
                <p className='font-bold text-xs'>ORDER PLACED</p>
                <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
            </div>

            <div>
                <p className='text-xs font-bold'>TOTAL</p>
                <p>
                    <Currency quantity={amount} currency="USD"/>
                </p>
            </div>

            <p className='flex-1 self-end text-sm text-blue-500 sm:text-xl whitespace-nowrap text-right '>{items.length} item(s)</p>

            <p className='absolute w-40 right-2 lg:w-72 truncate whitespace-nowrap top-2 text-xs'>ORDER #{id}</p>
        </div>
        <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-y-auto'>
                {images.map((image) => (
                    <img src={image} alt="order_img" className="h-20 object-contain sm:h-32"/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Order

export async function getServerSideProps(context){
    const session = await getSession(context)
  
  return {
    props:{
      session
    }
  }
  }
  
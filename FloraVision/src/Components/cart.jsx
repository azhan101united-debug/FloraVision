import React from 'react'

const Cart = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center '>Our Trendy plants
        <div className='flex flex-col md:flex-row w-full gap-4  border-full rounded-full bg-amber-50 '>
        <div className='w-full md:w-1/2 p-2'>
            <img src="" alt="" />
        </div>
        <div className='w-full md:w-1/2 p-2'>
            <h1>For Your Desks Decoration</h1>
            <h2 className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet itaque, maxime iusto totam architecto accusantium amet dicta at tempore. Quibusdam, enim fugit! Nisi pariatur, obcaecati recusandae animi laboriosam accusantium.</h2>
            <h1>Rs. 599/-</h1>
            <div className='flex items-center p-2 gap-4'>
                <div className='border rounded-md p-1 px-3' >explore</div>
                <div className='border rounded-md p-1'>tag</div>
            </div>
        </div>
    </div>
    <div className='flex flex-col md:flex-row w-full gap-4  border-full rounded-full bg-amber-50 '>
        <div className='w-full md:w-1/2 p-2'>
            <img src="" alt="" />
        </div>
        <div className='w-full md:w-1/2 p-2'>
            <h1>For Your Desks Decoration</h1>
            <h2 className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet itaque, maxime iusto totam architecto accusantium amet dicta at tempore. Quibusdam, enim fugit! Nisi pariatur, obcaecati recusandae animi laboriosam accusantium.</h2>
            <h1>Rs. 599/-</h1>
            <div className='flex items-center p-2 gap-4'>
                <div className='border rounded-md p-1 px-3' >explore</div>
                <div className='border rounded-md p-1'>tag</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart
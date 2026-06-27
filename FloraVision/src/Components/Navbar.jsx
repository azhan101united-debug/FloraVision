import React from 'react'


const Navbar = () => {
  return (
  
      <div className=' flex justify-center gap-90 py-3 border-gray-700 mx-auto text-xm border-4 rounded-full'   >
        <div className="justify-start items-center "> 
          <img src="/workspaces/FloraVision/FloraVision/public/icons.svg" className='inline-block align-middle w-5 h-5 mx-1' alt=" Flora Vision" /> Flora Vision  
        </div>
        
        <div className='flex items-center  gap-8 '>
          <a href="#home">Home</a>
          <a href="">PlantType</a>
          <a href="#Help">Help</a>
          <a href="">Contact</a>
        </div>
        
        <div className='flex items-center gap-6 '>
         <a href="">Icon</a>
         <a href="">Icon</a>
         <a href="">Icon</a>
        </div>
    </div>
  )
}

export default Navbar
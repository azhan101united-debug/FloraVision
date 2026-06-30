import React from 'react'


const Navbar = () => {
  return (
  
      <div className=' flex flex-row justify-between items-center gap-4 w-full py-4 px-6 text-xm text-white  '   >
        <div className="justify-start items-center "> 
          <img src="/workspaces/FloraVision/FloraVision/public/icons.svg" className='inline-block align-middle w-5 h-5 mx-1 text-white' alt=" " /> FloraVision.  
        </div>
        
        <div className='flex items-center gap-4 '>
          <a href="#home">Home</a>
          <a href="">PlantType</a>
          <a href="#Help">Help</a>
          <a href="">Contact</a>
        </div>
        
        <div className='flex items-center gap-6  '>
         <a href="">Icon</a>
         <a href="">Icon</a>
         <a href="">Icon</a>
        </div>
    </div>
  )
}

export default Navbar
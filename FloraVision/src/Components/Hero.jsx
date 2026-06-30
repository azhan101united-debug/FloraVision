import React from 'react'

const Hero = () => {
  return (
    /* 
      1. MASTER CONTAINER FRAME: 
         - Places text color natively to white.
         - Relative positioning enables absolute decoration elements underneath.
    */
    <div className='relative w-full min-h-screen text-white flex items-center justify-center overflow-hidden font-sans '>
      
      {/* 
        2. INNER CONTENT LAYER BOUNDARY:
           - max-w-7xl prevents components from drifting apart on wide 4K screens.
           - Grid layout breaks into a clean vertical stack on mobile, 2 columns on desktop.
      */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* ⬅️ LEFT COLUMN COMPONENT PILLAR */}
        <div className='flex flex-col gap-16 md:gap-24 w-full'>
          
          {/* Main Title, Subtext and Action Buttons */}
          <div className='flex flex-col gap-6 max-w-xl'>
            <h1 className='text-5xl md:text-7xl font-semibold tracking-tight text-zinc-100'>
              Earth’s Exhale
            </h1>
            
            <p className='text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg'>
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
            
            {/* Horizontal Action Tray */}
            <div className='flex flex-row items-center gap-4 pt-2'>
              <button className='border border-zinc-500 hover:border-white rounded-md px-8 py-2.5 text-sm font-medium tracking-wide bg-transparent transition-all'>
                Buy Now
              </button>
              
              <button className='flex flex-row items-center gap-2 group text-zinc-400 hover:text-white transition-all text-sm'>
                {/* Custom inline Play SVG matching your UI design */}
                <svg className="w-9 h-9 text-zinc-400 group-hover:text-white transition-all" fill="none" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M23 18L15 23V13L23 18Z" fill="currentColor"/>
                </svg>
                <span className='tracking-wide'>Live Demo...</span>
              </button>
            </div>
          </div>

          {/* Testimonial Overlay Widget */}
          <div className='border border-zinc-800/60 bg-[#16221A]/60 backdrop-blur-md rounded-2xl p-5 flex flex-col gap-3 max-w-xs shadow-xl'>
            <div className='flex flex-row items-center gap-3'>
              {/* Profile Avatar Frame */}
              <img 
                src="/Background1.jpg" 
                alt="Ronnie Hamill Avatar"  
                className='rounded-full w-10 h-10 object-cover border border-zinc-700'
              />
              <div className='flex flex-col'>
                <h4 className='text-xs font-bold tracking-wide text-zinc-200'>Ronnie Hamill</h4>
                <p className='text-[10px] text-amber-500 tracking-widest'>★★★★★</p>
              </div>
            </div>
            
            <p className='text-[11px] text-zinc-400 leading-normal font-light'>
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>      
        </div>

        {/* ➡️ RIGHT COLUMN COMPONENT PILLAR (PRODUCT DETAIL CARD) */}
        <div className='flex flex-col items-center lg:items-end w-full relative z-20'>
          
          {/* Main Visual Frosted Floating Glass Card Frame */}
          <div className='w-full max-w-85 border border-zinc-800/80 bg-[#131F17]/70 backdrop-blur-xl rounded-4xl p-6 shadow-2xl flex flex-col gap-6 relative overflow-hidden'>
            
            {/* Upper Frame Product Asset Stage */}
            <div className='w-full h-56 flex items-center justify-center relative bg-linear-to-b from-white/2 to-transparent rounded-2xl p-4'>
              <img 
                src="/plants/plant01.png" 
                alt="Aglaonema plant display view" 
                className='max-h-full max-w-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]'
              />
            </div>
            
            {/* Typography Identification Layer & Slider Chevron */}
            <div className='flex flex-row items-start justify-between w-full pr-1'>
              <div className='flex flex-col'>
                <span className='text-[11px] font-medium tracking-wide text-zinc-500 uppercase'>
                  Indoor Plant
                </span>
                <h2 className='text-xl font-medium text-zinc-200 tracking-wide mt-0.5'>
                  Aglaonema plant
                </h2>
              </div>
              
              {/* Slider Next Chevron Action Button */}
              <button className='text-zinc-500 hover:text-white transition-all pt-1 text-sm' aria-label="Next slide">
                ➔
              </button>
            </div>
            
            {/* Footer Interactive Actions & Indicators */}
            <div className='flex flex-col gap-4 w-full'>
              <button className='w-full border border-zinc-500 hover:bg-white hover:text-slate-950 font-medium tracking-wide rounded-md py-2.5 transition-all text-xs text-center justify-center bg-transparent'>
                Buy Now
              </button>
              
              {/* Slider Pagination Status Dots Dashboard Layout Element */}
              <div className='text-zinc-600 text-[10px] tracking-widest font-mono text-center flex items-center justify-center gap-1.5'>
                <span className='w-4 h-0.5 bg-zinc-700 inline-block rounded-full'></span>
                <span className='w-1.5 h-0.5 bg-zinc-500 inline-block rounded-full'></span>
                <span className='w-1.5 h-0.5 bg-zinc-500 inline-block rounded-full'></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero

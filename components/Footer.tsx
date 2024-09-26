import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#000] w-full z-50 text-gray-300 '>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#c1e8ff]'>ANGELSTA</h1>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            dolor, aliquam consectetur repellendus minima necessitatibus
            mollitia neque ducimus, harum aliquid sapiente.
          </p>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
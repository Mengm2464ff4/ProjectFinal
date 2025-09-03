import React from 'react'

const HomePage = () => {
  return (
    <> 
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
        Welcome to Our Website
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-700 text-center leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus cumque, 
        voluptatibus blanditiis reprehenderit quia. Obcaecati, at, recusandae cupiditate 
        soluta dolorem nam illum sint iste, perferendis distinctio ea nobis odit!
      </p>
      <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
        Get Started
      </button>
    </div>
    </>
  )
}

export default HomePage
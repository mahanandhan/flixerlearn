import React from 'react'
import Header from './Header'

const Main = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 text-gray-800">
      
      {/* Navbar */}

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100">
        <Header />
      </main>

    </div>
  )
}

export default Main;

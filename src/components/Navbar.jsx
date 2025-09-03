import { useState } from "react"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // track mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(null) // track which dropdown is open in mobile

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = (menu) =>
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu)

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <a href="#"
           className="flex-shrink-0 text-2xl font-bold cursor-pointer 
                      transition-all duration-300 ease-in-out
                       hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" >
            ShopEase
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
             <div className="relative group">
              <a href="#" className="relative hover:text-white-300 transition-duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 
              after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 ease-in-out
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                   Home <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Overview</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Featured</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Popular</a>
              </div>
            </div>
            {/* Home Dropdown */}
            <div className="relative group">
              <a href="#" className="relative hover:text-white-300 transition-duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 
              after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 ease-in-out
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                   About <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Our Story</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Mission & Vision</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Team</a>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <a href="#" className="relative hover:text-white-300 transition-duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 
              after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 ease-in-out
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Shop <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">All Products</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">New Arrivals</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Best Sellers</a>
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="relative group">
              <a href="#" className="relative hover:text-white-300 transition-duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 
              after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 ease-in-out
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Categories <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Skincare</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Fashion</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Makeup</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Beauty</a>
              </div>
            </div>

            {/* Deals Dropdown */}
            <div className="relative group">
              <a href="#" className="relative hover:text-white-300 transition-duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 
              after:transition-all after:duration-300 hover:after:w-full transition-all duration-300 ease-in-out
                hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Deals <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Today’s Deals</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-400">Clearance</a>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="fas fa-search absolute right-3 top-2 text-gray-500 text-sm"></i>
            </div>

            {/* Cart */}
            <a href="#" className="relative hover:text-gray-900">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-1 -right-2 bg-blue-200 text-gray-900 text-xs px-1 rounded-full">3</span>
            </a>

            {/* Login Button */}
            <a href="#" className="flex items-center bg-white-800 text-gray-100 px-4 py-2 rounded-lg hover:bg-blue-500 transition hover:text-gray-900" >
              <i className="fas fa-user mr-2"></i>
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
              {isOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {/* Home Dropdown */}
          <div>
            <a
              href="#"
              className="flex justify-between w-full hover:text-blue-600"
              onClick={(e) => { e.preventDefault(); toggleDropdown("home"); }} >
              Home <i className={`fas fa-chevron-${isDropdownOpen === "home" ? "up" : "down"} text-xs`}></i>
            </a>
            {isDropdownOpen === "home" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="block hover:text-blue-600">Overview</a>
                <a href="#" className="block hover:text-blue-600">Featured</a>
                <a href="#" className="block hover:text-blue-600">Popular</a>
              </div>
            )}
          </div>

          {/* Shop Dropdown */}
          <div>
            <a
              href="#"
              className="flex justify-between w-full hover:text-blue-600"
              onClick={(e) => { e.preventDefault(); toggleDropdown("shop"); }}
            >
              Shop <i className={`fas fa-chevron-${isDropdownOpen === "shop" ? "up" : "down"} text-xs`}></i>
            </a>
            {isDropdownOpen === "shop" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="block hover:text-blue-600">All Products</a>
                <a href="#" className="block hover:text-blue-600">New Arrivals</a>
                <a href="#" className="block hover:text-blue-600">Best Sellers</a>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div>
            <a
              href="#"
              className="flex justify-between w-full hover:text-blue-600"
              onClick={(e) => { e.preventDefault(); toggleDropdown("categories"); }}
            >
              Categories <i className={`fas fa-chevron-${isDropdownOpen === "categories" ? "up" : "down"} text-xs`}></i>
            </a>
            {isDropdownOpen === "categories" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="block hover:text-blue-600">Electronics</a>
                <a href="#" className="block hover:text-blue-600">Fashion</a>
                <a href="#" className="block hover:text-blue-600">Home & Kitchen</a>
                <a href="#" className="block hover:text-blue-600">Beauty</a>
              </div>
            )}
          </div>

          {/* Deals Dropdown */}
          <div>
            <a
              href="#"
              className="flex justify-between w-full hover:text-blue-600"
              onClick={(e) => { e.preventDefault(); toggleDropdown("deals"); }}
            >
              Deals <i className={`fas fa-chevron-${isDropdownOpen === "deals" ? "up" : "down"} text-xs`}></i>
            </a>
            {isDropdownOpen === "deals" && (
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="block hover:text-blue-600">Today’s Deals</a>
                <a href="#" className="block hover:text-blue-600">Clearance</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar

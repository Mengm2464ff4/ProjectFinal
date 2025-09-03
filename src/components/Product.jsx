"use client"

import { useState } from "react"

const Product = () => {
  const [cart, setCart] = useState([])
  const [notification, setNotification] = useState("")
  const [showCart, setShowCart] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [addingProduct, setAddingProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)
  const [showViewAll, setShowViewAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allProducts = [
    {
      id: 1,
      name: "Designer Summer Dress",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.3,
      category: "Women", // Updated category from Fashion to Women
      image: "https://i.pinimg.com/1200x/90/47/07/9047077db8c63390c51fc123901655c0.jpg",
      description: "Lightweight and stylish summer dress perfect for casual or semi-formal occasions.",
      stock: 60,
    },
    {
      id: 2,
      name: "Athletic Running Shoes",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.6,
      category: "Sports & Outdoors", // Updated category to Sports & Outdoors
      image: "https://i.pinimg.com/736x/52/ef/66/52ef6655cf9f5fed93fb28a3e5f28e39.jpg",
      description: "Comfortable running shoes designed for performance and style.",
      stock: 35,
    },
    {
      id: 3,
      name: "Elegant Evening Gown",
      price: "$129.99",
      originalPrice: "$159.99",
      rating: 4.7,
      category: "Women", // Updated category from Fashion to Women
      image: "https://i.pinimg.com/736x/eb/44/70/eb44701210c423725a8d2dd4064862bb.jpg",
      description: "Luxurious evening gown perfect for parties and formal events.",
      stock: 25,
    },
    {
      id: 4,
      name: "Casual Denim Jacket",
      price: "$59.99",
      originalPrice: "$79.99",
      rating: 4.4,
      category: "Fashion", // Kept as Fashion category
      image: "https://i.pinimg.com/736x/3d/e8/8f/3de88ffbaf49ff97d8fa28cad0136f14.jpg",
      description: "Classic denim jacket for everyday casual wear.",
      stock: 40,
    },
    {
      id: 5,
      name: "Stylish Handbag",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.5,
      category: "Women", // Updated category from Fashion to Women
      image: "https://i.pinimg.com/736x/f3/06/04/f30604b2a2a607cacfe4641eaf60bb8c.jpg",
      description: "Trendy handbag to complement any outfit.",
      stock: 50,
    },
    {
      id: 6,
      name: "Men's Business Suit",
      price: "$129.99",
      originalPrice: "$159.99",
      rating: 4.4,
      category: "Man", // Updated from Home & Kitchen to Man category
      image: "https://i.pinimg.com/1200x/e9/d1/2a/e9d12aa76194fda23fd6d731a520e7dd.jpg",
      description: "Professional business suit for formal occasions and work.",
      stock: 20,
    },
    {
      id: 7,
      name: "Men's Casual Sneakers",
      price: "$39.99",
      originalPrice: "$54.99",
      rating: 4.2,
      category: "Man", // Updated from Home & Kitchen to Man category
      image: "https://i.pinimg.com/1200x/21/47/f4/2147f44d959bb4f8a19c9b7564cb7432.jpg",
      description: "Comfortable casual sneakers for everyday wear.",
      stock: 50,
    },
    {
      id: 8,
      name: "Men's Leather Watch",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.7,
      category: "Man", // Updated from Home & Kitchen to Man category
      image: "https://i.pinimg.com/1200x/ad/04/37/ad04370cc1b9a8f410724e110c8b3ed7.jpg",
      description: "Premium leather watch with classic design.",
      stock: 25,
    },
    {
      id: 9,
      name: "Professional Yoga Mat",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.5,
      category: "Sports & Outdoors",
      image: "https://i.pinimg.com/736x/5f/5a/3a/5f5a3afaff64d0b16fe9d255f1cf3ef8.jpg",
      description: "Durable, non-slip yoga mat for professional and home workouts.",
      stock: 70,
    },
    {
      id: 10,
      name: "Performance Basketball Shoes",
      price: "$119.99",
      originalPrice: "$149.99",
      rating: 4.8,
      category: "Sports & Outdoors",
      image: "https://i.pinimg.com/1200x/4a/9a/1a/4a9a1a9b71139a09df08fff066a80883.jpg",
      description: "High-performance basketball shoes for comfort and agility on the court.",
      stock: 30,
    },
    {
      id: 11,
      name: "Insulated Water Bottle",
      price: "$24.99",
      originalPrice: "$34.99",
      rating: 4.3,
      category: "Sports & Outdoors",
      image: "https://i.pinimg.com/736x/59/be/66/59be663902852941e0df08c27e8e0221.jpg",
      description: "Keep your drinks hot or cold for hours with this insulated bottle.",
      stock: 80,
    },
    {
    id: 12,
      name: "Blue Sneakers",
      price: "$59.99",
      originalPrice: "$79.99",
      category: "Sports & Outdoors",
      image: "https://i.pinimg.com/1200x/7b/86/ea/7b86ea557c627cb98ca6a23430861dde.jpg",
      description: "Comfortable sneakers for everyday wear",
      rating: 4.7,
      stock: 15
  },
  {
    id: 13,
    name: "Red Dress",
    price: "$79.99",
    originalPrice: "$99.99",
    category: "Fashion",
    image: "https://i.pinimg.com/1200x/7d/0f/b5/7d0fb5db2feafb5f9bdaa31b0b810ca6.jpg",
    description: "Beautiful red dress for parties",
    rating: 4.5,
    stock: 20
  },
   {
    id: 14,
    name: "Wilson Tennis Racket",
    price: "$120",
    originalPrice: "$140",
    category: "Sports & Outdoors",
    subCategory: "Equipment",
    brand: "Wilson",
    image: "https://i.pinimg.com/736x/88/d7/ea/88d7ea2b9c763a2769c5c71e81ee51b2.jpg",
    description: "Professional tennis racket for beginners and experts.",
    rating: 4.7,
    stock: 15,
    discount: 15,
    createdAt: "2025-08-21"
  },
  {
    id: 15,
    name: "Nike Sports Bag",
    price: "$65",
    originalPrice: "$70",
    category: "Sports & Outdoors",
    subCategory: "Accessories",
    brand: "Nike",
    image: "https://i.pinimg.com/1200x/32/a8/9a/32a89aed1e8a0fc41da57d3adf1f744f.jpg",
    dscription: "Durable sports bag with multiple compartments.",
    rating: 4.6,
    stock: 50,
    discount: 5,
    createdAt: "2025-08-18"
  },
  {
    id: 16,
    name: "Adidas Running Shoes",
    price: "$85",
    originalPrice: "$100",
    category: "Sports & Outdoors",
    subCategory: "Shoes",
    brand: "Adidas",
    size: ["38", "39", "40", "41", "42"],
    image: "https://i.pinimg.com/1200x/60/7e/bd/607ebd13c893b409b51239ba9abf9667.jpg",
    description: "Lightweight running shoes with breathable mesh.",
    rating: 4.8,
    stock: 30,
    discount: 10,
    createdAt: "2025-08-12"
  },
   {
    id: 17,
    name: "Men's Slim Fit Shirt",
    price: "$49",
    originalPrice: "$55",
    category: "Man",
    subCategory: "Clothing",
    brand: "Zara",
    size: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/d5/fb/d3/d5fbd3e5e6890992084cc0a4b7d994f2.jpg",
    description: "High-quality slim fit cotton shirt for formal and casual wear.",
    rating: 4.7,
    stock: 55,
    discount: 10,
    createdAt: "2025-08-28"
  },
  {
    id: 18,
    name: "Women's Tote Bag",
    price: "$95",
    originalPrice: "$110",
    category: "Women",
    subCtegory: "Bags",
    brand: "Kate Spade",
    image:"https://i.pinimg.com/736x/d6/8f/94/d68f94c037997e40b1e809719d555212.jpg",
    description: "Spacious tote bag with leather finishing and modern design.",
    rating: 4.7,
    stock: 35,
   },
    {
    id: 19,
    name: "Women's High Heel Sandals",
    price: 85,
    category: "Women",
    subCategory: "Shoes",
    brand: "Aldo",
    size: ["36", "37", "38", "39", "40"],
    image: "https://i.pinimg.com/736x/2b/18/ea/2b18ea199c34b40e0863b8c4512bdcd6.jpg",
    description: "Stylish high heel sandals with comfortable sole and elegant design.",
    rating: 4.8,
    stock: 40,
    discount: 12,
    createdAt: "2025-08-25"
  },
  {
    id: 20,
    name: "Women's Floral Maxi Dress",
    price: "$110",
    originalPrice: "$130",
    category: "Women",
    subCategory: "Clothing",
    brand: "Mango",
    size: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/7f/5d/63/7f5d63c62b0aa1e1655591bc4467632a.jpg",
    description: "Elegant floral maxi dress perfect for parties, weddings, and casual outings.",
    rating: 4.9,
    stock: 28,
    discount: 15,
    createdA: "2025-08-28"
  },
  ]
  const categories = ["All", "Women", "Man", "Fashion", "Sports & Outdoors"] // Updated categories array

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  const handleViewAll = () => {
    setShowViewAll(true)
  }

  const addToCart = (product) => {
    console.log("[v0] Adding product to cart:", product.name)
    setAddingProduct(product)
    setShowAddModal(true)
    setIsLoading(true)

    setTimeout(() => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id)
        let newCart
        if (existingItem) {
          newCart = prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
          newCart = [...prevCart, { ...product, quantity: 1 }]
        }
        console.log("[v0] Updated cart:", newCart)
        return newCart
      })

      setIsLoading(false)
      setNotification(`${product.name} added to cart!`)
      setTimeout(() => setNotification(""), 3000)

      setTimeout(() => {
        setShowAddModal(false)
        setAddingProduct(null)
      }, 1000)
    }, 1500)
  }

  const removeFromCart = (productId) => {
    console.log("[v0] Removing product from cart:", productId)
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    console.log("[v0] Updating quantity for product:", productId, "to:", newQuantity)
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const price = Number.parseFloat(item.price.replace("$", ""))
        return total + price * item.quantity
      }, 0).toFixed(2)
  }

  const handleCheckout = () => {
    setShowCart(false)
    setShowCheckout(true)
    setCheckoutStep(1)
    setOrderComplete(false)
  }

  const processOrder = () => {
    setCheckoutStep(2)
    setTimeout(() => {
      setOrderComplete(true)
      setCart([])
      setTimeout(() => {
        setShowCheckout(false)
        setCheckoutStep(1)
        setOrderComplete(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">  {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      {showAddModal && addingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90 backdrop-blur-md animate-fade-in"></div>
          <div className="relative bg-white rounded-3xl p-10 max-w-lg w-full mx-4 shadow-2xl transform animate-scale-in border border-slate-100">
            <div className="text-center">
              {isLoading ? (
                <>
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Adding to Cart...</h3>
                  <p className="text-slate-600 text-lg">Processing your selection</p>
                  <div className="flex justify-center gap-1 mt-4">
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Successfully Added!</h3>
                  <p className="text-slate-600 text-lg">Your item is now in the cart</p>
                </>
              )}

              <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={addingProduct.image}
                      alt={addingProduct.name}
                      className="w-20 h-20 object-cover rounded-xl bg-white shadow-md border border-slate-200"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{addingProduct.name}</h4>
                    <p className="text-blue-600 font-bold text-xl mb-2">{addingProduct.price}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-500 text-lg">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < Math.floor(addingProduct.rating) ? "text-yellow-500" : "text-slate-300"}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 font-medium">({addingProduct.rating})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed top-4 left-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
          Cart ({getTotalItems()})
        </button>
      )}

      {showCart && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-slate-900">Shopping Cart</h2>
                <button onClick={() => setShowCart(false)} className="text-slate-500 hover:text-slate-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <p className="text-slate-500 text-center">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg bg-slate-100"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{item.name}</h3>
                          <p className="text-blue-600 font-bold">{item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2 cursor-pointer">
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold text-blue-600">${getTotalPrice()}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-lg animate-fade-in"></div>
          <div className="relative bg-white rounded-3xl max-w-2xl w-full mx-4 shadow-2xl transform animate-scale-in border border-slate-200 max-h-[90vh] overflow-y-auto">
            {!orderComplete ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-8 border-b border-slate-200">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Checkout</h2>
                    <p className="text-slate-600 mt-1">Complete your purchase</p>
                  </div>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-slate-400 hover:text-slate-600 text-3xl font-light"
                  >
                    ×
                  </button>
                </div>

                {checkoutStep === 1 ? (
                  <div className="p-8">
                    {/* Order Summary */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h3>
                      <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                        {cart.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-xl bg-white shadow-sm"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900">{item.name}</h4>
                              <p className="text-slate-600">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-bold text-blue-600">{item.price}</p>
                          </div>
                        ))}
                        <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
                          <span className="text-xl font-bold text-slate-900">Total:</span>
                          <span className="text-2xl font-bold text-blue-600">${getTotalPrice()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Information */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Shipping Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none md:col-span-2"
                        />
                        <input
                          type="text"
                          placeholder="Street Address"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none md:col-span-2"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Payment Information</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Cardholder Name"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <button
                      onClick={processOrder}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Place Order - ${getTotalPrice()}
                    </button>
                  </div>
                ) : (
                  /* Processing State */
                  <div className="p-12 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Processing Your Order</h3>
                    <p className="text-slate-600 text-lg mb-6">Please wait while we process your payment...</p>
                    <div className="flex justify-center gap-2">
                      <div
                        className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Order Complete */
              <div className="p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Order Confirmed!</h3>
                <p className="text-slate-600 text-lg mb-6">
                  Thank you for your purchase. Your order has been successfully placed.
                </p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <p className="text-green-800 font-semibold">Order #12345</p>
                  <p className="text-green-700 mt-2">You will receive a confirmation email shortly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showViewAll && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-lg animate-fade-in"
            onClick={() => setShowViewAll(false)}>
          </div>
          <div className="relative bg-white rounded-3xl max-w-7xl w-full mx-4 shadow-2xl transform animate-scale-in border border-slate-200 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-slate-200 sticky top-0 bg-white rounded-t-3xl z-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">All Products</h2>
                <p className="text-slate-600 mt-1">Discover our complete collection</p>
              </div>
              <button
                onClick={() => setShowViewAll(false)}
                className="text-slate-900 hover:text-slate-600 text-3xl font-light transition-colors cursor-pointer" >
                ×
              </button>
            </div>

            {/* Category Filter */}
            <div className="p-8 border-b border-slate-200">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg": "bg-slate-100 text-slate-700 hover:bg-slate-200" }`}> {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-blue-200" >
                    <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                        Sale
                      </div>
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400 text-sm">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-slate-300"}
                         >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">({product.rating})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-slate-900">{product.price}</span>
                      <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200" >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Discover Amazing
            <span className="text-blue-600 block">Products</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Shop the latest trends and find everything you need with unbeatable prices and fast shipping
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-slate-400 transition-colors">
              View Collections
            </button>
          </div>
        </div>
      </section>

    <section className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
      Shop by Category
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Women",
          image: "https://i.pinimg.com/1200x/c0/e7/4e/c0e74e529ce35100dfab9a21943be902.jpg",
          items: "1,800+ items",
        },
        {
          name: "Men",
          image: "https://i.pinimg.com/736x/b8/b2/58/b8b258753d4fcbb087bffdf02a87eceb.jpg",
          items: "3,200+ items",
        },
        {
          name: "Fashion",
          image:  "https://i.pinimg.com/736x/a4/2e/de/a42ede7267e51df780d7d8b3f4897fb3.jpg",
          items: "2,500+ items",
        },
        {
          name: "Sports & Outdoors",
          image: "https://i.pinimg.com/736x/f1/cf/ef/f1cfef0a264100ae87a428e4a6a80e20.jpg",
          items: "1,200+ items",
        },
        {
          name: "Accessories",
          image:"https://i.pinimg.com/736x/eb/d4/2d/ebd42d61cf55041b92b56901cfdc8d75.jpg",
          items: "1,000+ items",
        },
        {
          name: "Shoes",
          image:"https://i.pinimg.com/736x/f9/46/7f/f9467fb6f90ed0862cf7972b4e85109e.jpg",
          items: "2,800+ items",
        },
      ].map((category, index) => (
        <div
          key={index}
          className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative aspect-[4/3]">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
              <p className="text-sm text-gray-200">{category.items}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Featured Products */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
            <button
              onClick={handleViewAll}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer" >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">{"★".repeat(Math.floor(product.rating))}</div>
                  <span className="text-sm text-slate-600">({product.rating})</span>
                </div>
                <div className="mb-3  h-12 overflow-hidden">
                  <p className="text-sm text-slate-900 mb-3 line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-slate-900">{product.price}</span>
                  <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}

      {/* Newsletter */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 text-white focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product

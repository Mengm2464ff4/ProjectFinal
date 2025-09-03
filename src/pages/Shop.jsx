import React from 'react';

const products = [
  { 
    id: 1,name: 'Red Dress', price: '$79', image: 'https://i.pinimg.com/1200x/87/eb/46/87eb4671f372932c1f259be6ac8ba1eb.jpg', badge: 'New' 
  },
  { 
    id: 2, name: 'Blue Sneakers', price: '$59', image: 'https://i.pinimg.com/1200x/a4/51/91/a45191d2495bd794028d246e533ed545.jpg', badge: 'Sale'
   },
  { 
    id: 3, name: 'Leather Bag', price: '$129', image: 'https://i.pinimg.com/736x/fa/9c/7a/fa9c7a01be508d97fd08ceb9ce9bb3f5.jpg', badge: 'Hot'
   },
  { 
    id: 4, name: 'Sunglasses', price: '$49', image: 'https://i.pinimg.com/1200x/79/e7/32/79e7327aa2b36c8df907ae1956640eac.jpg', badge: 'New' 
  },
  { 
    id: 5, name: 'Hat', price: '$29', image: 'https://i.pinimg.com/1200x/26/37/e4/2637e42993587c3161d0330fe53041c3.jpg', badge: 'Sale' 
  },
  { 
    id: 6, name: 'Jeans', price: '$89', image: 'https://i.pinimg.com/1200x/c5/04/ab/c504ab52db74c689ef33bb84f64536be.jpg', badge: 'Hot' 
  },
];

const Shop = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Shop Our Products</h1>
        <p className="text-gray-600 text-lg">Discover the latest trends in fashion and accessories</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 pb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden"          >
            <div className="relative md:h-70 h-60 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-t-3xl"/>
              <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg 
                ${product.badge === 'New' ? 'bg-green-500' : product.badge === 'Sale' ? 'bg-red-500' : 'bg-orange-500'}`}> {product.badge}
              </span>
            </div>
            <div className="p-5 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-red-500 font-bold text-lg mb-4">{product.price}</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-full shadow-lg hover:scale-105 transition transform">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mb-20">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
          Load More Products
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Shop</h4>
            <ul className="space-y-3 text-sml">
              <li><a href="#" className="hover:text-white transition">HomeShop</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
              <li><a href="#" className="hover:text-white transition">Deals</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul className="space-y-5 text-sml">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <ul className="flex space-x-5">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          &copy; 2025 Your E-Commerce Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Shop;

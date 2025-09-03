import React from 'react';

const categories = [
  { id: 1, name: 'Fashion', image: 'https://i.pinimg.com/736x/84/5d/7c/845d7cea53f74952638553f40748cd3e.jpg' },
  { id: 2, name: 'Outfits', image: 'https://i.pinimg.com/736x/7a/54/0f/7a540fc4e6d351bd2e74cbeca147d747.jpg' },
  { id: 3, name: 'Shoes', image: 'https://i.pinimg.com/1200x/bf/e4/56/bfe4566327c354df9ad6c63b253f9266.jpg' },
  { id: 4, name: 'Bags', image: 'https://i.pinimg.com/1200x/6e/54/6a/6e546a6d0f33fa3faf744b82e9a2e603.jpg' },
  { id: 5, name: 'Accessories', image: 'https://i.pinimg.com/1200x/39/b4/8d/39b48dd3d662da584f9bb80c6063a0ac.jpg' },
  { id: 6, name: 'Jewelry', image: 'https://i.pinimg.com/1200x/1e/86/c8/1e86c8520bc08c72897e4da6d1d30f76.jpg' },
  { id: 7, name: 'Hats', image: 'https://i.pinimg.com/736x/cc/41/ed/cc41edca9f98cdb5f7af24014716b99e.jpg' },
  { id: 8, name: 'Sunglasses', image: 'https://i.pinimg.com/1200x/b3/56/c6/b356c65eb941ee490175898d1acf422c.jpg' },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg">
                  New
                </span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm mb-4 text-center">
                  Shop the latest trends in {category.name.toLowerCase()}.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition transform">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 w-full mt-16">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
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
            <ul className="space-y-3 text-sm">
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

        {/* Bottom Line */}
        <div className="bg-gray-800 py-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2025 Your E-Commerce Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Our Store</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We are an innovative E-Commerce platform, delivering high-quality
            products and exceptional shopping experiences worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make online shopping simple, secure, and enjoyable
            for everyone. We provide top-quality products, fast delivery, and
            excellent customer service.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to become one of the world's most trusted E-Commerce brands,
            connecting millions of buyers and sellers across the globe.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl font-bold">
                P
              </div>
              <h3 className="text-xl font-semibold mt-4">Premium Products</h3>
              <p className="text-gray-600 mt-2">
                We offer a wide range of high-quality, handpicked products.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 flex items-center justify-center rounded-full text-2xl font-bold">
                F
              </div>
              <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
              <p className="text-gray-600 mt-2">
                Quick and reliable delivery, right to your doorstep.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl font-bold">
                S
              </div>
              <h3 className="text-xl font-semibold mt-4">Secure Payments</h3>
              <p className="text-gray-600 mt-2">
                100% safe transactions with trusted payment gateways.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto bg-pink-100 text-pink-600 flex items-center justify-center rounded-full text-2xl font-bold">
                C
              </div>
              <h3 className="text-xl font-semibold mt-4">Customer Support</h3>
              <p className="text-gray-600 mt-2">
                24/7 support to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <img src={`https://i.pravatar.cc/150?img=${member + 5}`} alt="Team Member"
                  className="rounded-full w-24 h-24 mx-auto"/>
                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                <p className="text-gray-500">Product Manager</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Shopping with Us?
        </h2>
        <p className="text-gray-200 mb-6">
          Discover amazing products at unbeatable prices today.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About

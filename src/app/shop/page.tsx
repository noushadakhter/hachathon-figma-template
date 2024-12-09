import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid layout for product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image Section */}
        <div className="relative">
          <Image
            src="/product-image.jpg" // Replace with your image path
            alt="Floating Phone"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 rounded-b-lg">
            <p className="text-center text-gray-700 font-medium">Floating Phone</p>
          </div>
        </div>

        {/* Product Information Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Floating Phone</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            This sleek and innovative phone defies gravity with its state-of-the-art floating technology. Experience a minimalist design with maximum impact, perfect for those who love the future in their hands.
          </p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">$1,139.33</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition-all">
              Select Options
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded shadow-md transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Lightweight and durable design</li>
          <li>Cutting-edge floating technology</li>
          <li>Seamless integration with your favorite apps</li>
          <li>Battery life that lasts all day</li>
        </ul>
      </div>
    </div>
  );
}
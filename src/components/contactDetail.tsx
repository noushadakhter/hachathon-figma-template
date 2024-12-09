import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">VISIT OUR OFFICE</h1>
      <h2 className="text-2xl font-semibold mb-12 text-center">We help small businesses with big ideas</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.687a2.114 2.114 0 013 3l-3.757 3.757m-2.058-2.059l-1.687 1.687a2.114 2.114 0 01-3-3l3.757-3.757m-2.058 2.059L7.75 12m4.106 5.238l1.687-1.687a2.114 2.114 0 013 3l-3.757 3.757m-2.058-2.059l-1.687 1.687a2.114 2.114 0 01-3-3l3.757-3.757m-2.058 2.059L7.75 12" />
            </svg>
          </div>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Support</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit Request</button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 17.496l-1.486-1.486m0 0-1.486-1.486m0 0-1.486-1.486M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Support</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit Request</button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.889 18.376A4.5 4.5 0 0116.5 23H7.5A4.5 4.5 0 013 18.376V5.624A4.5 4.5 0 017.5 1h9A4.5 4.5 0 0120.889 5.624v12.752z" />
            </svg>
          </div>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <p className="text-white mb-4">georgia-young@example.com</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Support</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit Request</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
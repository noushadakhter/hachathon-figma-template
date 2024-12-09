import React from 'react';

function ContactTalkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
        <h2 className="text-2xl font-semibold mb-4">WE CANNOT WAIT TO MEET YOU</h2>
        <h1 className="text-4xl font-bold mb-8">Lets Talk</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Try It Now</button>
      </div>
    </div>
  );
}

export default ContactTalkPage;
import React from 'react';

const Contactapage = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 p-5">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          Have questions about Qurbani animals? Reach out to us.
        </p>
      </div>

      <div className="flex flex-col items-center">

       
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p>Email: support@qurbanibazar.com</p>
          <p>Phone: +880123456789</p>
          <p>Location: Chattogram, Bangladesh</p>

          <div className="mt-5">
            <p className="text-sm text-gray-500">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>  
        </div>
        </div>
    );
};

export default Contactapage;
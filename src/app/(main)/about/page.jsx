

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-6">
          About Qurbani Online Bazar
        </h1>

        <p className="text-lg mb-6 text-gray-600">
          Qurbani Online Bazar is a modern platform designed to make
          buying and selling sacrificial animals easier, faster, and more
          reliable. We connect buyers directly with trusted sellers so you
          can find healthy animals at fair prices without hassle.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">

          <div className="p-6 shadow-md rounded-xl bg-white">
            <h2 className="font-semibold text-xl mb-2">🐐 Trusted Sellers</h2>
            <p className="text-gray-600">
              We verify sellers to ensure quality and safety for every listing.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-white">
            <h2 className="font-semibold text-xl mb-2">💰 Fair Pricing</h2>
            <p className="text-gray-600">
              Transparent prices so buyers and sellers both get the best deal.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-white">
            <h2 className="font-semibold text-xl mb-2">🚚 Easy Process</h2>
            <p className="text-gray-600">
              Simple browsing, booking, and communication in one platform.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <p className="text-gray-500">
            Built with ❤️ to simplify Qurbani shopping experience.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
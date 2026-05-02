import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    location: "Dhaka",
    review:
      "Very healthy animals and excellent delivery service. Highly recommended!",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 2,
    name: "Karim Uddin",
    location: "Chattogram",
    review:
      "The buying process was smooth and easy. Loved the service.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 3,
    name: "Sakib Hasan",
    location: "Sylhet",
    review:
      "Affordable prices and quality animals. Will buy again next Eid.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Yakub Builder",
    location: "Chattagram",
    review:
      "Smooth delivery process.I was in peace beacause i was sure that they would do there best ",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <div className="my-20">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600">
          Customer Testimonials
        </h1>

        <p className="text-gray-500 mt-3">
          What our customers say about us
        </p>
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-6">

        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-sm p-5"
          >

            <div className="flex items-center  gap-4 mb-4">

              <Image
                src={item.image}
                alt="user"
                width={60}
                height={60}
                className="rounded-full h-17"

              />

              <div>
                <h2 className="font-bold text-lg">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>

            </div>
        <div className="h-32">
            <p className="text-gray-600">
              “{item.review}”
            </p></div>

           <div><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-600" aria-label="5 star" />
</div></div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
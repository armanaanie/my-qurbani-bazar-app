import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    location: "Dhaka",
    review:
      "Very healthy animals and excellent delivery service. Highly recommended!",
    image: "https://i.ibb.co.com/8DPL7Qf/user.png",
  },

  {
    id: 2,
    name: "Karim Uddin",
    location: "Chattogram",
    review:
      "The buying process was smooth and easy. Loved the service.",
    image: "https://i.ibb.co.com/8DPL7Qf/user.png",
  },

  {
    id: 3,
    name: "Sakib Hasan",
    location: "Sylhet",
    review:
      "Affordable prices and quality animals. Will buy again next Eid.",
    image: "https://i.ibb.co.com/8DPL7Qf/user.png",
  },
  {
    id: 4,
    name: "Yakub Builder",
    location: "Chattagram",
    review:
      "Smooth delivery process.I was in peace beacause i was sure that they would do there best ",
    image: "https://i.ibb.co.com/8DPL7Qf/user.png",
  },
];

const Testimonials = () => {
  return (
    <div className="my-20">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Customer Testimonials
        </h1>

        <p className="text-gray-500 mt-3">
          What our customers say about us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-xl p-5"
          >

            <div className="flex items-center gap-4 mb-4">

              <Image
                src={item.image}
                alt="user"
                width={60}
                height={60}
                className="rounded-full"
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

            <p className="text-gray-600">
              “{item.review}”
            </p>

            <div className="rating mt-4">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
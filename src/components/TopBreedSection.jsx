import Image from 'next/image';
import React from 'react';
const top=[
  {
    "id": 1,
    "name": "Black Bengal Goat",
    "type": "Goat",
    "quality": "Premium",
    "badge": "Most Popular",
    "description": "Highly demanded for Qurbani due to meat quality and adaptability.",
    "photo": "https://images.unsplash.com/photo-1657257974728-245a37db588e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "name": "Jamunapari Goat",
    "type": "Goat",
    "quality": "High",
    "badge": "Premium",
    "description": "Large size goat breed known for good meat yield.",
    "photo": "https://images.unsplash.com/photo-1686556931793-a89ff1428168?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "name": "Sahiwal Cow",
    "type": "Cow",
    "quality": "Premium",
    "badge": "Top Choice",
    "description": "Famous South Asian cow breed with strong health and milk/meat balance.",
    "photo": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": 4,
    "name": "Red Sindhi Cow",
    "type": "Cow",
    "quality": "High",
    "badge": "Featured",
    "description": "Strong and heat-resistant breed suitable for local conditions.",
    "photo": "https://images.unsplash.com/photo-1660613027300-d82f6471ea9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
const TopBreedSection = () => {
    return (<div className='my-10'><h1 className='font-bold text-center text-4xl my-10 text-green-600'>Top Breed Animal</h1><div className='grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10'>
            {
                top.map((topper,ind)=><div key={ind}className="card bg-base-100 shadow-sm">
  <figure>
    <Image src={topper.photo} alt="top-animals" width={300} height={300} className='h-56'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{topper.name}</h2>
    <p>{topper.description}</p>
    <div className="card-actions ">
      <button className="btn btn-action">Quality : {topper.quality}</button>
    </div>
  </div>
</div>)
            }
        </div></div>
        
    );
};

export default TopBreedSection;
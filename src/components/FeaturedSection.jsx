import Image from 'next/image';
import React from 'react';
const animalData=[
  {
    "id": 1,
    "name": "White Goat",
    "price": 18000,
    "quality": "Premium",
    "badge": "Best Seller",
    "weight": "28 kg",
    "location": "Chattogram",
    "photo": "https://images.unsplash.com/photo-1560888126-5c13ad3f9345?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "name": "White Jamuna Sheep",
    "price": 25000,
    "quality": "High",
    "badge": "Hot Deal",
    "weight": "35 kg",
    "location": "Dhaka",
    "photo": "https://images.unsplash.com/photo-1532362091753-d53721a3e82c?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "name": "Red Sindhi Cow",
    "price": 120000,
    "quality": "Premium",
    "badge": "Featured",
    "weight": "420 kg",
    "location": "Comilla",
    "photo": "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "name": "Deshi Brown Goat",
    "price": 15000,
    "quality": "Standard",
    "badge": "New Arrival",
    "weight": "25 kg",
    "location": "Noakhali",
    "photo": "https://images.unsplash.com/photo-1573578160998-4f4c7b023aec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
const FeaturedSection = () => {
    return (<div className='mt-10  shadow-sm'> <h1 className='font-bold text-4xl p-3 text-center text-green-600 mb-5'>Featured Animal</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10  shadow-sm'>
           
           {
            animalData.map((animal)=><div key={animal.id} className="card bg-base-100 shadow-sm">

   <Image src={animal.photo} alt='animal-pic' width={300} height={100} className='h-50'></Image>
 
  <div className="card-body">
     <div className="badge badge-secondary">{animal.badge}</div>
    <h2 className="card-title">
     {animal.name}
     
    </h2>
    <p>Location:<span className='font-semibold'>{animal.location}</span></p>
     <p>Price:<span className='font-semibold'>{animal.price}</span></p>
    <div className="card-actions">
      <div className="badge badge-outline">{animal.quality}</div>
      <div className="badge badge-outline">{animal.price} taka</div>
    </div>
  </div>
</div>)
           } 
        </div>
    </div>)
        
};

export default FeaturedSection;
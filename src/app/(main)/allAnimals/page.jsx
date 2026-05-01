"use client"
import Animals from "@/lib/data.json"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const AllAnimalPage = () => {
    
  const [animals,setAnimals]= useState(Animals)  ;
  const sortLowToHigh =()=>{
    const sorted= [...animals].sort((a,b)=>a.price - b.price);
    setAnimals(sorted)
  }   
   const sortHighToLow =()=>{
    const sorted= [...animals].sort((a,b)=>b.price - a.price );
    setAnimals(sorted)
  }   
    return (
        <div className="flex flex-col gap-5 shadow-sm my-10 ">
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Shorting by price⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={sortHighToLow}>High to low</button></li>
    <li><button onClick={sortLowToHigh}>Low to High</button></li>
  </ul>
</div>
          {
            animals.map((animal,index)=><div key={index}className="card card-side bg-base-100 shadow-sm">
               
  <figure>
<Image alt="animal" src={animal.image} width={200} height={200} className="h-[200px] w-[200px] p-3"></Image>
  </figure>
  <div className="card-body">
     <h1 className="text-semibold text-3xl">{animal.type}</h1>
    <h2 className="card-title">{animal.name}</h2>
    <p>{animal.description}</p>
    <p>Price:{animal.price} taka</p>
    <button className={`badge ${animal.category==="Small Animal"?"bg-amber-200":animal.category==="Large Animal"?"bg-green-200":"bg-red-200"} `}>{animal.category}</button>
    <div className="card-actions">
      <Link className="btn btn-primary" href={`/animals/${animal.id}`}>See details</Link>
    </div>
  </div>
</div> ) }
       
    


</div>
)}
export default AllAnimalPage
import Animals from "@/lib/data.json"
import Image from "next/image";
import Link from "next/link";





const AnimalsDetailsPage = async ({params}) => {
    const {id}= await params;

    console.log(id);
    const singleAnimal= Animals.find((animal)=>animal.id===parseInt(id))
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
     <Image src={singleAnimal.image} alt="animal" width={500} height={500}/> 
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{singleAnimal.name}</h2>
    <p>{singleAnimal.description}</p>
    <div className="flex gap-3 justify-evenly items-start"><span>Breed:{singleAnimal.breed} ||</span> <span>Price:{singleAnimal.price}</span>  </div> <div className="flex gap-3 justify-evenly items-start"><span>Age:{singleAnimal.age}</span> || <span>Weight:{singleAnimal.weight}</span></div>
    <p><span className="font-semibold">Location:</span>{singleAnimal.location}</p>
    <div className="card-actions">
      <Link className="btn btn-primary" href="/buyerform">Booking Now</Link>
    </div>
  </div>
</div>
    );
};

export default AnimalsDetailsPage;
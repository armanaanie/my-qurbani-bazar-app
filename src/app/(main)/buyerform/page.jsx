"use client"
import { toast } from 'react-toastify';
const BuyerPage = () => {
    const handleToast=()=>{
        toast.success("Your booking form is successfully submit.")
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Book Your Animal</h1>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-1/2 lg:w-1/3 mx-auto border p-4 mb-10">
                <label className="label">Name</label>
  <input type="text" className="input" placeholder="Name" />


  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />
   <label className="label">Phone Number</label>
  <input type="number" className="input" placeholder="Enter Your Number" />


  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button  type="submit" className="btn btn-neutral mt-4" onClick={handleToast}>Submit</button>
</fieldset>
        </div>
    );
};

export default BuyerPage;
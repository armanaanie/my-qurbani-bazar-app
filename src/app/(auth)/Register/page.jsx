"use client"
import Link from 'next/link';
import { useForm } from "react-hook-form"
const RegisterPage = () => {
    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  
    const handleRegisterFunc =(data)=>{
        console.log(data)
 
    }
    return (
        <div>
           <h1 className="font-bold text-3xl text-center my-10 ">New Here! Register now!</h1> 
           <form onSubmit={ handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-1/2 lg:w-1/3 mx-auto border p-4">
 
 <label className="label">Name</label>
  <input type="text" className="input" placeholder="Enter Your Name" {...register("name",{ required: true })}/>
 {errors.name && <span className='text-red-600'>This field is required</span>}
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email",{ required: true })} />
    {errors.email && <span className='text-red-600'>This field is required</span>}

   <label className="label">Photo Url</label>
  <input type="text" className="input" placeholder="Enter your Photo Url" />
 

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" {...register("password",{ required: true })} />
 {errors.password && <span className='text-red-600'>This field is required</span>}
  <button className="btn btn-neutral mt-4" type='submit'>Register</button>
</fieldset></form>

        </div>
    );
};

export default RegisterPage;
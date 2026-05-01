"use client"
import Link from 'next/link';
import { useForm } from "react-hook-form"

const SignInPage = () => {

const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  
    const handleLogInFunc =(data)=>{
        console.log(data)
 
    }
    return (
        <div className='my-10'>
        <h1 className='text-center font-bold text-3xl my-10'>Sign in Yourself</h1>
        <form onSubmit={ handleSubmit(handleLogInFunc)}><fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-1/2 lg:w-1/3 mx-auto border p-4">
 
 

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email",{ required: true })}/>
    {errors.email && <span className='text-red-600'>This field is required</span>}

  


  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" {...register("password",{ required: true })} />
 {errors.password && <span className='text-red-600'>This field is required</span>}
  <button className="btn btn-neutral mt-4" type='submit'>Sign in</button>
  <div className='flex flex-col gap-3 text-center items-center justify-center'><p>Don't have an account? <Link href='/Register' className='text-red-600 font-semibold my-3'>Register</Link></p>
  <p className='font-bold'>Or</p>
 <button className='btn btn-outline'>Login with Google</button></div>
  
</fieldset></form>
        

        </div>
    );
};

export default SignInPage;
"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const SignInPage = () => {

const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const [isShowPassword,setIsShowPassword]= useState(false)
  
    const handleLogInFunc =async(data)=>{
        console.log(data);
        const {email,password}=data;
        console.log(email,password)
 const { data:res, error } = await authClient.signIn.email({
    email: email, 
    password: password, 
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,"data res",error,"error");
if(error){
    toast.error(error.message);
}
if(res){
    toast.success("Sign in successfully!")
}
 
}; 
const handleGoogleSignin =async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data,"google")  
}
    return (
        <div className='my-10'>
        <h1 className='text-center font-bold text-3xl my-10'>Sign in Yourself</h1>
        <form onSubmit={ handleSubmit(handleLogInFunc)}><fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-1/2 lg:w-1/3 mx-auto border p-4">
 
 

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email",{ required: true })}/>
    {errors.email && <span className='text-red-600'>This field is required</span>}

  


  <label className="label">Password</label>
  <div className='flex justify-between'>
  <input type={isShowPassword?"text":"password"} className="input" placeholder="Password" {...register("password",{ required: true })} />

<button className='btn border border-gray-300 ' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye />:<FaEyeSlash />}</button></div>
 {errors.password && <span className='text-red-600'>This field is required</span>}
  <button className="btn btn-neutral mt-4" type='submit'>Sign in</button>
  <div className='flex flex-col gap-3 text-center items-center justify-center'><p>Don't have an account? <Link href='/Register' className='text-red-600 font-semibold my-3'>Register</Link></p>
  <p className='font-bold'>Or</p>
 <button className='btn btn-outline' onClick={handleGoogleSignin}>Login with Google</button></div>
  
</fieldset></form>
        

        </div>
    );
};

export default SignInPage;
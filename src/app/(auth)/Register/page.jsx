"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';
const RegisterPage =() => {
    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const router= useRouter();
   const [isShowPassword,setIsShowPassword]= useState(false);
    const handleRegisterFunc = async(data)=>{
        console.log(data);
        const {name,email,password,image}=data;
        console.log(name,email,image)
 const { data:res,error} = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    image: image,
    callbackURL: "/signin",
     rememberMe: true, 
});
console.log(res,"data res",error,"error");
if(error){
    toast.error(error.message);
}
if(res){
    toast.success("Register successfully!");
    router.push("/signin");
}
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
  <input type="text" className="input" placeholder="Enter your Photo Url" {...register("image",{ required: true })}/>
   {errors.image && <span className='text-red-600'>This field is required</span>}
 

  <label className="label">Password</label>
  <div className='flex justify-between items-center'><input type={isShowPassword?"text":"password"} className="input" placeholder="Password" {...register("password",{ required: true })} />
  
  <button className='btn border border-gray-300 ' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye />:<FaEyeSlash />}</button></div>
   {errors.password && <span className='text-red-600'>This field is required</span>}
  <button className="btn btn-neutral mt-4" type='submit'>Register</button>
</fieldset></form>

        </div>
    );
};

export default RegisterPage;
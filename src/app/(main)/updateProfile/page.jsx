"use client"
import ProfileHeader from '@/components/shared/ProfileHeader';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateUserPage = () => {
    const router =useRouter();
    const [name,setName]= useState("");
    const [image,setImage]= useState("");
    const handleUpdate = async (e)=>{
        e.preventDefault();

        try{
            await authClient.updateUser({
                name,image,
            });
            toast.success("Profile updated successfully");
            router.push('/myProfile');
        } catch (error){
            toast.error("Update failed");
            console.log(error)
        }
    }
    return (<div className='my-10'>
        <ProfileHeader></ProfileHeader>
        <h1 className='font-bold text-3xl text-green-600 text-center p-4'>Update Profile</h1>

        <form onSubmit={handleUpdate}> <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">


  <label className="label text-green-600">Image</label>
 <input type="text" value={image}placeholder="Image Url" className="input input-success" onChange={(e)=>setImage(e.target.value)} />

  <label className="label text-green-600">Name</label>
  <input type="text" placeholder="Name" className="input input-success" value={name} onChange={(e)=>setName(e.target.value)} />

  <button className="btn btn-success mt-4 text-white" type='submit'>Update Info</button>
</fieldset></form>
       
</div>
    );
};

export default UpdateUserPage;
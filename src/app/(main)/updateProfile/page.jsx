import ProfileHeader from '@/components/shared/ProfileHeader';
import React from 'react';

const UpdateUserPage = () => {
    return (<div className='my-10'>
        <ProfileHeader></ProfileHeader>
        <h1 className='font-bold text-3xl text-green-600 text-center p-4'>Update Profile</h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">


  <label className="label text-green-600">Image</label>
 <input type="text" placeholder="Image Url" className="input input-success" />

  <label className="label text-green-600">Name</label>
  <input type="text" placeholder="Name" className="input input-success" />

  <button className="btn btn-success mt-4 text-white">Update Info</button>
</fieldset>
</div>
    );
};

export default UpdateUserPage;
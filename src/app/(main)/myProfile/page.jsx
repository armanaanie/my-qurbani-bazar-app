import ProfileHeader from '@/components/shared/ProfileHeader';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';


const MyProfilePage = async() => {
    const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
    return (
        <div>
           <ProfileHeader></ProfileHeader>
           <div className='flex flex-col items-center justify-center gap-4 shadow-sm p-10 my-10'><Image src={user?.image || "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}alt='user pic' className='rounded-full bg-green-600 p-1' height={100} width={100}></Image>
           <span className='font-bold text-xl'>{user?.name}</span>
           <p>Email:<span className='font-bold'>{user?.email}</span></p>
           <p>Phone<span className='text-[10px]'>(dummy)</span>:<span className='font-bold'>1234567890</span></p></div>

        </div>
    );
};

export default MyProfilePage;

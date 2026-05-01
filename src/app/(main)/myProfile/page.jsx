import ProfileHeader from '@/components/shared/ProfileHeader';
import Image from 'next/image';


const MyProfilePage = () => {
    return (
        <div>
           <ProfileHeader></ProfileHeader>
           <div className='flex flex-col items-center justify-center gap-4 shadow-sm p-10 my-10'><Image src="https://plus.unsplash.com/premium_photo-1673367754031-65483137554c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='user pic' className='rounded-full bg-green-600 p-1' height={100} width={100}></Image>
           <span className='font-bold text-xl'>User Name</span>
           <p>Email:<span className='font-bold'>@.com</span></p>
           <p>Phone:<span className='font-bold'>1234567890</span></p></div>

        </div>
    );
};

export default MyProfilePage;

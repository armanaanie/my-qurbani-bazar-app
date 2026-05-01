import Link from 'next/link';

import { FaRegPenToSquare } from 'react-icons/fa6';

const ProfileHeader = () => {
    return (
        <div>
            <div className='flex justify-between bg-green-600 text-white items-center my-6 px-3 py-4 shadow-sm'><span className='font-bold text-2xl'>My Profile</span>
           <Link href="/updateProfile"><FaRegPenToSquare /></Link></div>
        </div>
    );
};

export default ProfileHeader;
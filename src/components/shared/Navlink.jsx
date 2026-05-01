"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const pathname= usePathname();
    console.log(pathname);
    const isActive= href===pathname
    return (
        <Link href={href} className={`${isActive?"border-b-2 border-b-green-600 text-green-600":"text-black"}`}>{children}</Link>
    );
};

export default Navlink;
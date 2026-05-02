"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import avatar from "@/assets/user.png"
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { data: session ,isPending} = authClient.useSession();
  const user= session?.user;
const router= useRouter();
  console.log(user,"session")
    const links= 
    <><li><Navlink href="/">Home</Navlink></li>
    <li><Navlink href="/allAnimals">All Animals</Navlink></li> </>   
    return (
       <div className=" flex flex-col md:flex-row gap-4 justify-between  items-center p-5 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Image src={logo} alt="logo" className="rounded-full " width={90} height={90}></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  {isPending?<span className="font-semibold text-xl text-center text-green-600">Loading...</span>:user?<div className=" flex flex-col items-center md:flex-row gap-2">
    <h2>Hello, {user?.name}</h2>
    <Link href='/myProfile'><Image src={user?.image || avatar} alt="avatar" className="rounded-full bg-green-600 p-1 h-[40] w-[40]" height={50} width={70}></Image></Link>
   <button className="btn btn-primary"  onClick={async()=>{
    await authClient.signOut();router.push("/signin")}}>Sign out</button>
   <Link className="btn btn-outline" href="/Register">Register</Link>
  </div>:<Link className="btn btn-primary" href="/signin">Sign in</Link>}
  
</div>
    );
};

export default Navbar;
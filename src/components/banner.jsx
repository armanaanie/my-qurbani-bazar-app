import React from 'react';
import banner from '@/assets/banner.png'
import Link from 'next/link';
const Banner = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner.src})`
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-italic">Welcome to <span className='text-green-200'>Qurbani Online Bazar</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link className="btn text-white bg-green-700" href="/about">Get Started</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;
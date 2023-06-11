import React from 'react';
import '../../index.css';

export default function Home() {
  return ( // page d'accueil grand background
    <>
      <div className='text-center p-0 my-64 items-center justify-center relative z-10' id='home'>
        <h3 className='font-bold text-onNeutralBg'>
          Jérémy Quint
        </h3>
        <h1 className='font-bold text-onNeutralBg'>
          Developpeur integrateur Web
        </h1>
      </div>
    </>
  );
}
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Caraousal from '../components/Caraousal';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Caraousal /></div>
      <div className='m-3'>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>

    
      <div>
        <Footer />
      </div>
    </div>
  );
}

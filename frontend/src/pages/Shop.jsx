import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { Newcollections } from '../components/Newcollections/Newcollections'
import { Footer } from '../components/Footer/Footer'
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Footer />
    </div>
  );
}

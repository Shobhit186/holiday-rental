'use client';
import useCountries from '@/app/hooks/useCountries';
import React from 'react'
import Heading from '../Heading';
import HeartButton from '../HeartButton';

const ListingHead = ({title,imageSrc,locationValue,id,currentUser}) => {
    const {getByValue} = useCountries();
    const location = getByValue(locationValue);

  return (
    <>
     <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
     <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
       <img alt="Image" src={imageSrc || "https://res.cloudinary.com/dwo32kgjq/image/upload/v1738597460/xravrbrjltj6maxkgvqc.jpg"} className='object-cover w-full' />
       <div className='absolute top-5 right-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
          
       </div>
     </div>
    </>
  )
}

export default ListingHead
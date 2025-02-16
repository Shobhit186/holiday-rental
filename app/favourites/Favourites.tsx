import React from 'react'
import { SafeListing, SafeUser } from '../types'
import Heading from '../Components/Heading';
import Container from '../Components/Container';
import ListingCard from '../Components/listings/ListingCard';
interface FavouritesProps {
    listings: SafeListing[]  | undefined;
    currentUser?: SafeUser | null
}
const Favourites: React.FC<FavouritesProps> = ({listings,currentUser}) => {
  return (
    <Container>
    <Heading title='Favourites' subtitle='List of places you have favourited!' />
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
       {listings?.map((listing) => (
        <ListingCard key={listing.id} data={listing} />
       ))}
    </div>
    </Container>
  )
}

export default Favourites
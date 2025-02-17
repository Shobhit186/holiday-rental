import getCurrentUser from '@/app/actions/getCurrentUsers';
import getListingById from '@/app/actions/getListingById';
import EmptyState from '@/app/Components/EmptyState';
import React from 'react';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';


const ListingPage = async ({ params }: { params: { listingId: string } }) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();
    if(!listing){
        return(
            <EmptyState />
        )
    }
  return (
    <>
      <ListingClient listing={listing} currentUser={currentUser} reservation={reservations} />
    </>
  )
}

export default ListingPage;
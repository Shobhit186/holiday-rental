'use client';
import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useCallback,useState } from 'react';
import { useRouter } from 'next/navigation';
import Heading from '../Components/Heading';
import Container from '../Components/Container';
import ListingCard from '../Components/listings/ListingCard';


const Reservations = ({reservations, currentUser}) => {
    const router = useRouter();
  const [deletedId, setDeletedId]= useState('');

  const onCancel = useCallback((id) => {
     setDeletedId(id);

     axios.delete(`/api/reservations/${id}`)
     .then(() => {
        toast.success('Reservation cancelled');
        router.refresh();
     })
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     .catch((error) => {
        toast.error("Something Went Wrong");
     })
     .finally(() => {
        setDeletedId('');
     })
  },[router])
  return (
    <Container>
        <Heading title='Reservations' subtitle='Bookings on your properties' />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {reservations.map((reservation) => (
            <ListingCard key={reservation.id} data={reservation.listing} reservation={reservation} onAction={onCancel} disabled={deletedId === reservation.id} actionId={reservation.id} actionLabel="Cancel guest reservation" currentUser={currentUser} />
        ))}
        </div>
    </Container>
  )
}

export default Reservations;
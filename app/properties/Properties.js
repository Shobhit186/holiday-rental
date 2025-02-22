"use client";
import Container from "../Components/Container";
import Heading from "../Components/Heading";
import { useRouter } from "next/navigation";
import { useCallback,useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../Components/listings/ListingCard";

const Properties = ({listings, currentUser}) => {
  const router = useRouter();
  const [deletedId, setDeletedId]= useState('');

  const onCancel = useCallback((id) => {
     setDeletedId(id);

     axios.delete(`/api/listings/${id}`)
     .then(() => {
        toast.success('Listing deleted');
        router.refresh();
     })
     .catch((error) => {
        toast.error(error?.response?.data?.error);
     })
     .finally(() => {
        setDeletedId('');
     })
  },[])
  return (
    <Container>
        <Heading title="Properties" subtitle="All listings on one place" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
            {listings.map((reservation) => (
                <ListingCard key={reservation.id} data={reservation} onAction={onCancel} disabled={deletedId === reservation.id} actionId={reservation.id} actionLabel="Delete Listing" currentUser={currentUser} />
            ))}
        </div>
    </Container>
  )
}

export default Properties;